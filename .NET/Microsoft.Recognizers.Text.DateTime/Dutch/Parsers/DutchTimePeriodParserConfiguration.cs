using System.Collections.Immutable;
using System.Linq;
using System.Text.RegularExpressions;

using Microsoft.Recognizers.Definitions.Dutch;
using Microsoft.Recognizers.Text.DateTime.Utilities;
using Microsoft.Recognizers.Text.Number;

namespace Microsoft.Recognizers.Text.DateTime.Dutch
{
    public class DutchTimePeriodParserConfiguration : BaseOptionsConfiguration, ITimePeriodParserConfiguration
    {
        public IDateTimeExtractor TimeExtractor { get; }

        public IDateTimeParser TimeParser { get; }

        public IExtractor IntegerExtractor { get; }

        public Regex SpecificTimeFromToRegex { get; }

        public Regex SpecificTimeBetweenAndRegex { get; }

        public Regex PureNumberFromToRegex { get; }

        public Regex PureNumberBetweenAndRegex { get; }

        public Regex TimeOfDayRegex { get; }

        public Regex GeneralEndingRegex { get; }

        public Regex TillRegex { get; }

        public IImmutableDictionary<string, int> Numbers { get; }

        public IDateTimeUtilityConfiguration UtilityConfiguration { get; }

        public DutchTimePeriodParserConfiguration(ICommonDateTimeParserConfiguration config) : base(config)
        {
            TimeExtractor = config.TimeExtractor;
            IntegerExtractor = config.IntegerExtractor;
            TimeParser = config.TimeParser;
            PureNumberFromToRegex = DutchTimePeriodExtractorConfiguration.PureNumFromTo;
            PureNumberBetweenAndRegex = DutchTimePeriodExtractorConfiguration.PureNumBetweenAnd;
            SpecificTimeFromToRegex = DutchTimePeriodExtractorConfiguration.SpecificTimeFromTo;
            SpecificTimeBetweenAndRegex = DutchTimePeriodExtractorConfiguration.SpecificTimeBetweenAnd;
            TimeOfDayRegex = DutchTimePeriodExtractorConfiguration.TimeOfDayRegex;
            GeneralEndingRegex = DutchTimePeriodExtractorConfiguration.GeneralEndingRegex;
            TillRegex = DutchTimePeriodExtractorConfiguration.TillRegex;
            Numbers = config.Numbers;
            UtilityConfiguration = config.UtilityConfiguration;
        }

        public bool GetMatchedTimexRange(string text, out string timex, out int beginHour, out int endHour, out int endMin)
        {
            var trimmedText = text.Trim().ToLowerInvariant();
            if (trimmedText.EndsWith("s"))
            {
                trimmedText = trimmedText.Substring(0, trimmedText.Length - 1);
            }

            beginHour = 0;
            endHour = 0;
            endMin = 0;
            if (trimmedText.EndsWith("morning"))
            {
                timex = "TMO";
                beginHour = 8;
                endHour = Constants.HalfDayHourCount;
            }
            else if (trimmedText.EndsWith("afternoon"))
            {
                timex = "TAF";
                beginHour = Constants.HalfDayHourCount;
                endHour = 16;
            }
            else if (trimmedText.EndsWith("evening"))
            {
                timex = "TEV";
                beginHour = 16;
                endHour = 20;
            }
            else if (trimmedText.Equals("daytime"))
            {
                timex = "TDT";
                beginHour = 8;
                endHour = 18;
            }
            else if (trimmedText.EndsWith("night"))
            {
                timex = "TNI";
                beginHour = 20;
                endHour = 23;
                endMin = 59;
            }
            else if (DateTimeDefinitions.BusinessHourSplitStrings.All(o => trimmedText.Contains(o)))
            {
                timex = "TBH";
                beginHour = 8;
                endHour = 18;
            }
            else
            {
                timex = null;
                return false;
            }

            return true;
        }
    }
}
