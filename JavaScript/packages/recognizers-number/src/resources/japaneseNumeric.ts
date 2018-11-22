// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

import { BaseNumbers } from "./baseNumbers";
export namespace JapaneseNumeric {
	export const LangMarker = '';
	export const DecimalSeparatorChar = '.';
	export const FractionMarkerToken = '';
	export const NonDecimalSeparatorChar = ' ';
	export const HalfADozenText = '';
	export const WordSeparatorToken = '';
	export const RoundNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["k", 1000],["m", 1000000],["g", 1000000000],["t", 1000000000000],["b", 1000000000]]);
	export const RoundNumberMapChar: ReadonlyMap<string, number> = new Map<string, number>([["十", 10],["百", 100],["千", 1000],["万", 10000],["億", 100000000],["兆", 1000000000000]]);
	export const ZeroToNineMap: ReadonlyMap<string, number> = new Map<string, number>([["0", 0],["1", 1],["2", 2],["3", 3],["4", 4],["5", 5],["6", 6],["7", 7],["8", 8],["9", 9],["零", 0],["一", 1],["二", 2],["三", 3],["四", 4],["五", 5],["六", 6],["七", 7],["八", 8],["九", 9],["半", 0.5]]);
	export const FullToHalfMap: ReadonlyMap<string, string> = new Map<string, string>([["０", "0"],["１", "1"],["２", "2"],["３", "3"],["４", "4"],["５", "5"],["６", "6"],["７", "7"],["８", "8"],["９", "9"],["／", "/"],["－", "-"],["，", "\'"],["、", "\'"],["Ｇ", "G"],["Ｍ", "M"],["Ｔ", "T"],["Ｋ", "K"],["ｋ", "k"],["．", "."]]);
	export const UnitMap: ReadonlyMap<string, string> = new Map<string, string>([["万万", "億"],["億万", "兆"],["万億", "兆"],[" ", ""]]);
	export const RoundDirectList = [ "万","億","兆" ];
	export const DigitalNumberRegex = `((?<=(\\d|\\b))${BaseNumbers.MultiplierLookupRegex}(?=\\b))`;
	export const ZeroToNineFullHalfRegex = `[\\d１２３４５６７８９０]`;
	export const DigitNumRegex = `${ZeroToNineFullHalfRegex}+`;
	export const DozenRegex = `.*ダース$`;
	export const PercentageRegex = `.+(?=パ\\s*ー\\s*セ\\s*ン\\s*ト)|.*(?=[％%])`;
	export const DoubleAndRoundRegex = `${ZeroToNineFullHalfRegex}+(\\.${ZeroToNineFullHalfRegex}+)?\\s*[万億]{1,2}(\\s*(以上))?`;
	export const FracSplitRegex = `[はと]|分\\s*の`;
	export const ZeroToNineIntegerRegex = `[一二三四五六七八九]`;
	export const NegativeNumberTermsRegex = `(マ\\s*イ\\s*ナ\\s*ス)`;
	export const NegativeNumberTermsRegexNum = `(?<!(\\d+\\s*)|[-－])[-－]`;
	export const NegativeNumberSignRegex = `^${NegativeNumberTermsRegex}.*|^${NegativeNumberTermsRegexNum}.*`;
	export const SpeGetNumberRegex = `${ZeroToNineFullHalfRegex}|${ZeroToNineIntegerRegex}|[半対]|[分厘]`;
	export const PairRegex = '.*[対膳足]$';
	export const RoundNumberIntegerRegex = `[十百千万億兆]`;
	export const WhiteListRegex = `(。|，|、|（|）|”｜国|週間|時間|時|匹|キロ|トン|年|個|足|本|\\s|$)`;
	export const NotSingleRegex = `(?<!(第|だい))((${RoundNumberIntegerRegex}+(${ZeroToNineIntegerRegex}+|${ZeroToNineFullHalfRegex}+|十)\\s*))|((${ZeroToNineIntegerRegex}+|${ZeroToNineFullHalfRegex}+|十)\\s*(${RoundNumberIntegerRegex}\\s*){1,2})\\s*(([零]?(${ZeroToNineIntegerRegex}+|${ZeroToNineFullHalfRegex}+|十)\\s*${RoundNumberIntegerRegex}{0,1})\\s*)*\\s*(\\s*(以上)?)`;
	export const SingleRegex = `((${ZeroToNineIntegerRegex}|${ZeroToNineFullHalfRegex}|十)(?=${WhiteListRegex}))`;
	export const AllIntRegex = `((((${ZeroToNineIntegerRegex}|[十百千])\\s*${RoundNumberIntegerRegex}*)|(${ZeroToNineFullHalfRegex}\\s*${RoundNumberIntegerRegex})){1,2}(\\s*[以上])?)`;
	export const PlaceHolderPureNumber = `\\b`;
	export const PlaceHolderDefault = `\\D|\\b`;
	export const NumbersSpecialsChars = `((${NegativeNumberTermsRegexNum}|${NegativeNumberTermsRegex})\\s*)?${ZeroToNineFullHalfRegex}+`;
	export const NumbersSpecialsCharsWithSuffix = `${NegativeNumberTermsRegexNum}?${ZeroToNineFullHalfRegex}+\\s*${BaseNumbers.NumberMultiplierRegex}`;
	export const DottedNumbersSpecialsChar = `${NegativeNumberTermsRegexNum}?${ZeroToNineFullHalfRegex}{1,3}([,，、]${ZeroToNineFullHalfRegex}{3})+`;
	export const NumbersWithHalfDozen = `半(${RoundNumberIntegerRegex}|(ダース))`;
	export const NumbersWithDozen = `${AllIntRegex}(ダース)(?!${AllIntRegex})`;
	export const PointRegexStr = `[\\.．]`;
	export const AllFloatRegex = `${NegativeNumberTermsRegex}?${AllIntRegex}\\s*${PointRegexStr}\\s*[一二三四五六七八九](\\s*${ZeroToNineIntegerRegex})*`;
	export const NumbersWithAllowListRegex = `${NegativeNumberTermsRegex}?(${NotSingleRegex}|${SingleRegex})(?!(${AllIntRegex}*([、.]${ZeroToNineIntegerRegex}+)*|${AllFloatRegex})*\\s*${PercentageRegex}+)`;
	export const NumbersAggressiveRegex = `((${AllIntRegex})(?!(${AllIntRegex}*([、.]${ZeroToNineIntegerRegex}+)*|${AllFloatRegex})*\\s*${PercentageRegex}*))`;
	export const PointRegex = `${PointRegexStr}`;
	export const DoubleSpecialsChars = `(?<!(${ZeroToNineFullHalfRegex}+[\\.．]${ZeroToNineFullHalfRegex}*))(${NegativeNumberTermsRegexNum}\\s*)?${ZeroToNineFullHalfRegex}+[\\.．]${ZeroToNineFullHalfRegex}+(?!${ZeroToNineFullHalfRegex}*[\\.．]${ZeroToNineFullHalfRegex}+)`;
	export const DoubleSpecialsCharsWithNegatives = `(?<!(${ZeroToNineFullHalfRegex}+|\\.\\.|．．))(${NegativeNumberTermsRegexNum}\\s*)?[\\.．]${ZeroToNineFullHalfRegex}+(?!${ZeroToNineFullHalfRegex}*([\\.．]${ZeroToNineFullHalfRegex}+))`;
	export const SimpleDoubleSpecialsChars = `(${NegativeNumberTermsRegexNum}\\s*)?${ZeroToNineFullHalfRegex}{1,3}([,，]${ZeroToNineFullHalfRegex}{3})+[\\.．]${ZeroToNineFullHalfRegex}+`;
	export const DoubleWithMultiplierRegex = `(${NegativeNumberTermsRegexNum}\\s*)?${ZeroToNineFullHalfRegex}+[\\.．]${ZeroToNineFullHalfRegex}+\\s*${BaseNumbers.NumberMultiplierRegex}`;
	export const DoubleWithThousandsRegex = `${NegativeNumberTermsRegex}{0,1}\\s*(${ZeroToNineFullHalfRegex}+([\\.．]${ZeroToNineFullHalfRegex}+)?\\s*[万亿萬億]{1,2})`;
	export const DoubleAllFloatRegex = `(?<!((${AllIntRegex}[.]*)|${AllFloatRegex})*)${AllFloatRegex}(?!${ZeroToNineIntegerRegex}*\\s*パーセント)`;
	export const DoubleExponentialNotationRegex = `(?<!${ZeroToNineFullHalfRegex}+[\\.．])(${NegativeNumberTermsRegexNum}\\s*)?${ZeroToNineFullHalfRegex}+([\\.．]${ZeroToNineFullHalfRegex}+)?e(([-－+＋]*[1-9１２３４５６７８９]${ZeroToNineFullHalfRegex}*)|[0０](?!${ZeroToNineFullHalfRegex}+))`;
	export const DoubleScientificNotationRegex = `(?<!${ZeroToNineFullHalfRegex}+[\\.．])(${NegativeNumberTermsRegexNum}\\s*)?(${ZeroToNineFullHalfRegex}+([\\.．]${ZeroToNineFullHalfRegex}+)?)\\^([-－+＋]*[1-9１２３４５６７８９]${ZeroToNineFullHalfRegex}*)`;
	export const OrdinalRegex = `(第|だい)${AllIntRegex}`;
	export const OrdinalNumbersRegex = `(第|だい)${ZeroToNineFullHalfRegex}+`;
	export const AllFractionNumber = `${NegativeNumberTermsRegex}{0,1}((${ZeroToNineFullHalfRegex}+|${AllIntRegex})\\s*[はと]{0,1}\\s*)?${NegativeNumberTermsRegex}{0,1}(${ZeroToNineFullHalfRegex}+|${AllIntRegex})\\s*分\\s*の\\s*${NegativeNumberTermsRegex}{0,1}(${ZeroToNineFullHalfRegex}+|${AllIntRegex})`;
	export const FractionNotationSpecialsCharsRegex = `(${NegativeNumberTermsRegexNum}\\s*)?${ZeroToNineFullHalfRegex}+\\s+${ZeroToNineFullHalfRegex}+[/／]${ZeroToNineFullHalfRegex}+`;
	export const FractionNotationRegex = `(${NegativeNumberTermsRegexNum}\\s*)?${ZeroToNineFullHalfRegex}+[/／]${ZeroToNineFullHalfRegex}+`;
	export const PercentagePointRegex = `(?<!${AllIntRegex})(${AllFloatRegex}|${AllIntRegex})\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const SimplePercentageRegex = `(${AllFloatRegex}|${AllIntRegex}|[百])\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const NumbersPercentagePointRegex = `(${ZeroToNineFullHalfRegex})+([\\.．](${ZeroToNineFullHalfRegex})+)?\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const NumbersPercentageWithSeparatorRegex = `(${ZeroToNineFullHalfRegex}{1,3}[,，、]${ZeroToNineFullHalfRegex}{3})+([\\.．]${ZeroToNineFullHalfRegex}+)*\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const NumbersPercentageWithMultiplierRegex = `(?<!${ZeroToNineIntegerRegex})${ZeroToNineFullHalfRegex}+[\\.．]${ZeroToNineFullHalfRegex}+\\s*${BaseNumbers.NumberMultiplierRegex}\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const FractionPercentagePointRegex = `(?<!(${ZeroToNineFullHalfRegex}+[\\.．]))${ZeroToNineFullHalfRegex}+[\\.．]${ZeroToNineFullHalfRegex}+(?!([\\.．]${ZeroToNineFullHalfRegex}+))\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const FractionPercentageWithSeparatorRegex = `${ZeroToNineFullHalfRegex}{1,3}([,，、]${ZeroToNineFullHalfRegex}{3})+[\\.．]${ZeroToNineFullHalfRegex}+\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const FractionPercentageWithMultiplierRegex = `${ZeroToNineFullHalfRegex}+[\\.．]${ZeroToNineFullHalfRegex}+\\s*${BaseNumbers.NumberMultiplierRegex}\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const SimpleNumbersPercentageRegex = `(?<!${ZeroToNineIntegerRegex})${ZeroToNineFullHalfRegex}+\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト(?!([\\.．]${ZeroToNineFullHalfRegex}+))`;
	export const SimpleNumbersPercentageWithMultiplierRegex = `(?<!${ZeroToNineIntegerRegex})${ZeroToNineFullHalfRegex}+\\s*${BaseNumbers.NumberMultiplierRegex}\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const SimpleNumbersPercentagePointRegex = `(?!${ZeroToNineIntegerRegex})${ZeroToNineFullHalfRegex}{1,3}([,，]${ZeroToNineFullHalfRegex}{3})+\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const IntegerPercentageRegex = `${ZeroToNineFullHalfRegex}+\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const IntegerPercentageWithMultiplierRegex = `${ZeroToNineFullHalfRegex}+\\s*${BaseNumbers.NumberMultiplierRegex}\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const NumbersFractionPercentageRegex = `${ZeroToNineFullHalfRegex}{1,3}([,，]${ZeroToNineFullHalfRegex}{3})+\\s*パ\\s*ー\\s*セ\\s*ン\\s*ト`;
	export const SimpleIntegerPercentageRegex = `${NegativeNumberTermsRegexNum}?${ZeroToNineFullHalfRegex}+([\\.．]${ZeroToNineFullHalfRegex}+)?(\\s*)[％%]`;
	export const NumbersFoldsPercentageRegex = `${ZeroToNineFullHalfRegex}(([\\.．]?|\\s*)${ZeroToNineFullHalfRegex})?\\s*[の]*\\s*割引`;
	export const FoldsPercentageRegex = `${ZeroToNineIntegerRegex}(\\s*[.]?\\s*${ZeroToNineIntegerRegex})?\\s*[の]\\s*割引`;
	export const SimpleFoldsPercentageRegex = `${ZeroToNineFullHalfRegex}\\s*割(\\s*(半|(${ZeroToNineFullHalfRegex}\\s*分\\s*${ZeroToNineFullHalfRegex}\\s*厘)|${ZeroToNineFullHalfRegex}))?`;
	export const SpecialsPercentageRegex = `(${ZeroToNineIntegerRegex}|[十])\\s*割(\\s*(半|${ZeroToNineIntegerRegex}))?`;
	export const NumbersSpecialsPercentageRegex = `(${ZeroToNineFullHalfRegex}[\\.．]${ZeroToNineFullHalfRegex}|[1１][0０])\\s*割`;
	export const SimpleSpecialsPercentageRegex = `${ZeroToNineIntegerRegex}\\s*[.]\\s*${ZeroToNineIntegerRegex}\\s*割`;
	export const SpecialsFoldsPercentageRegex = `半\\s*分|(?<=ダース)`;
	export const TillRegex = `(から|--|-|—|——|~)`;
	export const MoreRegex = `(大なり|大きい|高い|大きく|>)`;
	export const LessRegex = `(小なり|小さい|低い|<)`;
	export const EqualRegex = `(等しい|イコール|=)`;
	export const MoreOrEqual = `((大なりかイコール)|(大きいかイコール)|(大なりか等しい)|(大きいか等しい)|小さくない|以上|最低)`;
	export const MoreOrEqualSuffix = `(より(大なりイコール|小さくない))`;
	export const LessOrEqual = `((${LessRegex}\\s*(或|或者)?\\s*${EqualRegex})|(小なりかイコール)|(小なりか等しい)|(小さいかイコール)|(小さいか等しい)|(小さいか等しい)|大さくない|以下|最大)`;
	export const LessOrEqualSuffix = `(小なりイコール|大さくない)`;
	export const OneNumberRangeMoreRegex1 = `(?<number1>((?!(((，|、)(?!\\d+))|((,|、)(?!\\d+))|。)).)+)\\s*((より)\\s*((${MoreOrEqual}|${MoreRegex}))|超える|を超える)`;
	export const OneNumberRangeMoreRegex2 = `(?<number1>((?!((，|、(?!\\d+))|(,|、(?!\\d+))|。)).)+)\\s*(より)?(大なり)`;
	export const OneNumberRangeMoreRegex3 = `(?<number1>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*(以上|最低)(?![万億]{1,2})`;
	export const OneNumberRangeMoreRegex4 = `(${MoreOrEqual}|${MoreRegex})\\s*(?<number1>((?!(と|は|((と)?同時に)|((と)?そして)|が|，|、|,|(，(?!\\d+))|(,(?!\\d+))|。)).)+)`;
	export const OneNumberRangeMoreSeparateRegex = `^[.]`;
	export const OneNumberRangeLessSeparateRegex = `^[.]`;
	export const OneNumberRangeLessRegex1 = `(?<number2>((?!(((，|、)(?!\\d+))|((,|、)(?!\\d+))|。)).)+)\\s*(より)\\s*(${LessOrEqual}|${LessRegex})`;
	export const OneNumberRangeLessRegex2 = `(?<number2>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*(より)?(小な)`;
	export const OneNumberRangeLessRegex3 = `(?<number2>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*(以下|未満)(?![万億]{1,2})`;
	export const OneNumberRangeLessRegex4 = `(${LessOrEqual}|${LessRegex})\\s*(?<number2>((?!(と|は|((と)?同時に)|((と)?そして)|が|，|、|,|(，(?!\\d+))|(,(?!\\d+))|。)).)+)`;
	export const OneNumberRangeEqualRegex = `(((?<number1>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*(に)\\s*${EqualRegex})|(${EqualRegex}\\s*(?<number1>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)))`;
	export const TwoNumberRangeRegex1 = `(?<number1>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*(と|${TillRegex})\\s*(?<number2>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*(の間)`;
	export const TwoNumberRangeRegex2 = `(${OneNumberRangeMoreRegex1}|${OneNumberRangeMoreRegex2}|${OneNumberRangeMoreRegex3}|${OneNumberRangeMoreRegex4})\\s*(と|は|((と)?同時に)|((と)?そして)|が|，|、|,)?\\s*(${OneNumberRangeLessRegex1}|${OneNumberRangeLessRegex2}|${OneNumberRangeLessRegex3}|${OneNumberRangeLessRegex4})`;
	export const TwoNumberRangeRegex3 = `(${OneNumberRangeLessRegex1}|${OneNumberRangeLessRegex2}|${OneNumberRangeLessRegex3}|${OneNumberRangeLessRegex4})\\s*(と|は|((と)?同時に)|((と)?そして)|が|，|、|,)?\\s*(${OneNumberRangeMoreRegex1}|${OneNumberRangeMoreRegex2}|${OneNumberRangeMoreRegex3}|${OneNumberRangeMoreRegex4})`;
	export const TwoNumberRangeRegex4 = `(?<number1>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)\\s*${TillRegex}\\s*(?<number2>((?!((，(?!\\d+))|(,(?!\\d+))|。)).)+)`;
	export const AmbiguousFractionConnectorsRegex = `^[.]`;
}
