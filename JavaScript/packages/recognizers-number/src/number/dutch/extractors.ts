import { BaseNumberExtractor, RegExpValue, BasePercentageExtractor } from "../extractors";
import { Constants } from "../constants";
import { NumberMode, LongFormatType } from "../models";
import { DutchNumeric } from "../../resources/dutchNumeric";
import { RegExpUtility } from "@microsoft/recognizers-text"

export class DutchNumberExtractor extends BaseNumberExtractor {
    protected extractType: string = Constants.SYS_NUM;
    protected negativeNumberTermsRegex: RegExp;

    constructor(mode: NumberMode = NumberMode.Default) {
        super();

        this.negativeNumberTermsRegex = RegExpUtility.getSafeRegExp(DutchNumeric.NegativeNumberTermsRegex + "$", "is");

        let regexes = new Array<RegExpValue>();

        // Add Cardinal
        let cardExtract: DutchCardinalExtractor | null = null;
        switch (mode) {
            case NumberMode.PureNumber:
                cardExtract = new DutchCardinalExtractor(DutchNumeric.PlaceHolderPureNumber);
                break;
            case NumberMode.Currency:
                regexes.push({ regExp: RegExpUtility.getSafeRegExp(DutchNumeric.CurrencyRegex, "gs"), value: "IntegerNum" });
                break;
            case NumberMode.Default:
                break;
        }

        if (cardExtract === null) {
            cardExtract = new DutchCardinalExtractor();
        }

        cardExtract.regexes.forEach(r => regexes.push(r));

        // Add Fraction
        let fracExtract = new DutchFractionExtractor();
        fracExtract.regexes.forEach(r => regexes.push(r));

        this.regexes = regexes;
    }
}

export class DutchCardinalExtractor extends BaseNumberExtractor {
    protected extractType: string = Constants.SYS_NUM_CARDINAL;

    constructor(placeholder: string = DutchNumeric.PlaceHolderDefault) {
        super();
        let regexes = new Array<RegExpValue>();

        // Add Integer Regexes
        let intExtract = new DutchIntegerExtractor(placeholder);
        intExtract.regexes.forEach(r => regexes.push(r));

        // Add Double Regexes
        let doubleExtract = new DutchDoubleExtractor(placeholder);
        doubleExtract.regexes.forEach(r => regexes.push(r));

        this.regexes = regexes;
    }
}

export class DutchIntegerExtractor extends BaseNumberExtractor {
    protected extractType: string = Constants.SYS_NUM_INTEGER;

    constructor(placeholder: string = DutchNumeric.PlaceHolderDefault) {
        super();

        let regexes = new Array<RegExpValue>(
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.NumbersWithPlaceHolder(placeholder), "gi"),
                value: "IntegerNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.NumbersWithSuffix, "gs"),
                value: "IntegerNum"
            },
            {
                regExp: this.generateLongFormatNumberRegexes(LongFormatType.integerNumDot, placeholder),
                value: "IntegerNum"
            },
            {
                regExp: this.generateLongFormatNumberRegexes(LongFormatType.integerNumBlank, placeholder),
                value: "IntegerNum"
            },
            {
                regExp: this.generateLongFormatNumberRegexes(LongFormatType.integerNumNoBreakSpace, placeholder),
                value: "IntegerNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.RoundNumberIntegerRegexWithLocks, "gis"),
                value: "IntegerNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.NumbersWithDozenSuffix, "gis"),
                value: "IntegerNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.AllIntRegexWithLocks, "gis"),
                value: "IntegerEng"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.AllIntRegexWithDozenSuffixLocks, "gis"),
                value: "IntegerEng"
            }
        );

        this.regexes = regexes;
    }
}

export class DutchDoubleExtractor extends BaseNumberExtractor {
    protected extractType: string = Constants.SYS_NUM_DOUBLE;

    constructor(placeholder: string = DutchNumeric.PlaceHolderDefault) {
        super();

        let regexes = new Array<RegExpValue>(
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleDecimalPointRegex(placeholder), "gis"),
                value: "DoubleNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleWithoutIntegralRegex(placeholder), "gis"),
                value: "DoubleNum"
            },
            {
                regExp: this.generateLongFormatNumberRegexes(LongFormatType.doubleNumDotComma, placeholder),
                value: "DoubleNum"
            },
            {
                regExp: this.generateLongFormatNumberRegexes(LongFormatType.doubleNumNoBreakSpaceComma, placeholder),
                value: "DoubleNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleWithMultiplierRegex, "gs"),
                value: "DoubleNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleWithRoundNumber, "gis"),
                value: "DoubleNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleAllFloatRegex, "gis"),
                value: "DoubleEng"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleExponentialNotationRegex, "gis"),
                value: "DoublePow"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.DoubleCaretExponentialNotationRegex, "gis"),
                value: "DoublePow"
            }
        );

        this.regexes = regexes;
    }
}

export class DutchFractionExtractor extends BaseNumberExtractor {

    protected extractType: string = Constants.SYS_NUM_FRACTION;

    constructor() {
        super();

        let regexes = new Array<RegExpValue>(
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.FractionNotationWithSpacesRegex, "gis"),
                value: "FracNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.FractionNotationRegex, "gis"),
                value: "FracNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.FractionNounRegex, "gis"),
                value: "FracEng"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.FractionNounWithArticleRegex, "gis"),
                value: "FracEng"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.FractionPrepositionRegex, "gis"),
                value: "FracEng"
            }
        );

        this.regexes = regexes;
    }
}

export class DutchOrdinalExtractor extends BaseNumberExtractor {
    protected extractType: string = Constants.SYS_NUM_ORDINAL;

    constructor() {
        super();
        let regexes = new Array<RegExpValue>(
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.OrdinalSuffixRegex, "gis"),
                value: "OrdinalNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.OrdinalNumericRegex, "gis"),
                value: "OrdinalNum"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.OrdinalDutchRegex, "gis"),
                value: "OrdEng"
            },
            {
                regExp: RegExpUtility.getSafeRegExp(DutchNumeric.OrdinalRoundNumberRegex, "gis"),
                value: "OrdEng"
            }
        );

        this.regexes = regexes;
    }
}

export class DutchPercentageExtractor extends BasePercentageExtractor {
    constructor() {
        super(new DutchNumberExtractor())
    }

    protected initRegexes(): Array<RegExp> {
        let regexStrs = [
            DutchNumeric.NumberWithSuffixPercentage,
            DutchNumeric.NumberWithPrefixPercentage
        ];

        return this.buildRegexes(regexStrs);
    }
}