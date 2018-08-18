import { ParseResult } from "@microsoft/recognizers-text";
import { INumberParserConfiguration } from "../parsers";
import { CultureInfo, Culture } from "../../culture";
import { DutchNumeric } from "../../resources/dutchNumeric";
import { RegExpUtility } from "@microsoft/recognizers-text"

export class DutchNumberParserConfiguration implements INumberParserConfiguration {

    readonly cardinalNumberMap: ReadonlyMap<string, number>;
    readonly ordinalNumberMap: ReadonlyMap<string, number>;
    readonly roundNumberMap: ReadonlyMap<string, number>;
    readonly cultureInfo: CultureInfo;
    readonly digitalNumberRegex: RegExp;
    readonly fractionMarkerToken: string;
    readonly negativeNumberSignRegex: RegExp;
    readonly halfADozenRegex: RegExp;
    readonly halfADozenText: string;
    readonly langMarker: string;
    readonly nonDecimalSeparatorChar: string;
    readonly decimalSeparatorChar: string;
    readonly wordSeparatorToken: string;
    readonly writtenDecimalSeparatorTexts: ReadonlyArray<string>;
    readonly writtenGroupSeparatorTexts: ReadonlyArray<string>;
    readonly writtenIntegerSeparatorTexts: ReadonlyArray<string>;
    readonly writtenFractionSeparatorTexts: ReadonlyArray<string>;

    constructor(ci?: CultureInfo) {
        if (!ci) {
            ci = new CultureInfo(Culture.Dutch);
        }

        this.cultureInfo = ci;

        this.langMarker = DutchNumeric.LangMarker;
        this.decimalSeparatorChar = DutchNumeric.DecimalSeparatorChar;
        this.fractionMarkerToken = DutchNumeric.FractionMarkerToken;
        this.nonDecimalSeparatorChar = DutchNumeric.NonDecimalSeparatorChar;
        this.halfADozenText = DutchNumeric.HalfADozenText;
        this.wordSeparatorToken = DutchNumeric.WordSeparatorToken;

        this.writtenDecimalSeparatorTexts = DutchNumeric.WrittenDecimalSeparatorTexts;
        this.writtenGroupSeparatorTexts = DutchNumeric.WrittenGroupSeparatorTexts;
        this.writtenIntegerSeparatorTexts = DutchNumeric.WrittenIntegerSeparatorTexts;
        this.writtenFractionSeparatorTexts = DutchNumeric.WrittenFractionSeparatorTexts;

        this.cardinalNumberMap = DutchNumeric.CardinalNumberMap;
        this.ordinalNumberMap = DutchNumeric.OrdinalNumberMap;
        this.roundNumberMap = DutchNumeric.RoundNumberMap;
        this.negativeNumberSignRegex = RegExpUtility.getSafeRegExp(DutchNumeric.NegativeNumberSignRegex, "is");
        this.halfADozenRegex = RegExpUtility.getSafeRegExp(DutchNumeric.HalfADozenRegex, "gis");
        this.digitalNumberRegex = RegExpUtility.getSafeRegExp(DutchNumeric.DigitalNumberRegex, "gis");
    }

    normalizeTokenSet(tokens: ReadonlyArray<string>, context: ParseResult): ReadonlyArray<string> {
        let fracWords = new Array<string>();
        let tokenList = Array.from(tokens);
        let tokenLen = tokenList.length;
        for (let i = 0; i < tokenLen; i++) {
            if (tokenList[i].includes("-")) {
                let spiltedTokens = tokenList[i].split("-");
                if (spiltedTokens.length === 2 && this.ordinalNumberMap.has(spiltedTokens[1])) {
                    fracWords.push(spiltedTokens[0]);
                    fracWords.push(spiltedTokens[1]);
                }
                else {
                    fracWords.push(tokenList[i]);
                }
            }
            else if ((i < tokenLen - 2) && tokenList[i + 1] === "-") {
                if (this.ordinalNumberMap.has(tokenList[i + 2])) {
                    fracWords.push(tokenList[i]);
                    fracWords.push(tokenList[i + 2]);
                }
                else {
                    fracWords.push(tokenList[i] + tokenList[i + 1] + tokenList[i + 2]);
                }

                i += 2;
            }
            else {
                fracWords.push(tokenList[i]);
            }
        }
        return fracWords;
    }

    resolveCompositeNumber(numberStr: string): number {
        if (numberStr.includes("-")) {
            let numbers = numberStr.split('-');
            let ret = 0;
            numbers.forEach(num => {
                if (this.ordinalNumberMap.has(num)) {
                    ret += this.ordinalNumberMap.get(num) as number;
                }
                else if (this.cardinalNumberMap.has(num)) {
                    ret += this.cardinalNumberMap.get(num) as number;
                }
            });

            return ret;
        }

        if (this.ordinalNumberMap.has(numberStr)) {
            return this.ordinalNumberMap.get(numberStr) as number;
        }

        if (this.cardinalNumberMap.has(numberStr)) {
            return this.cardinalNumberMap.get(numberStr) as number;
        }

        return 0;
    }
}