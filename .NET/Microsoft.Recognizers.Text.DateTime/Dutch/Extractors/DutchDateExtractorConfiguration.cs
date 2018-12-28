﻿using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Collections.Immutable;
using System.Linq;

using Microsoft.Recognizers.Text.DateTime.Dutch.Utilities;
using Microsoft.Recognizers.Text.DateTime.Utilities;
using Microsoft.Recognizers.Definitions.Dutch;
using Microsoft.Recognizers.Text.Number.Dutch;
using Microsoft.Recognizers.Text.Number;

namespace Microsoft.Recognizers.Text.DateTime.Dutch
{
    public class DutchDateExtractorConfiguration : BaseOptionsConfiguration, IDateExtractorConfiguration
    {
        public static readonly Regex MonthRegex =
            new Regex(DateTimeDefinitions.MonthRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        private static readonly Regex DayRegex =
            new Regex(DateTimeDefinitions.ImplicitDayRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex MonthNumRegex =
            new Regex(DateTimeDefinitions.MonthNumRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex YearRegex =
            new Regex(DateTimeDefinitions.YearRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex WeekDayRegex =
            new Regex(DateTimeDefinitions.WeekDayRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex SingleWeekDayRegex =
            new Regex(DateTimeDefinitions.SingleWeekDayRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex OnRegex =
            new Regex(DateTimeDefinitions.OnRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex RelaxedOnRegex =
            new Regex(DateTimeDefinitions.RelaxedOnRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex ThisRegex =
            new Regex(DateTimeDefinitions.ThisRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex LastDateRegex =
            new Regex(DateTimeDefinitions.LastDateRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex NextDateRegex =
            new Regex(DateTimeDefinitions.NextDateRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex DateUnitRegex =
            new Regex(DateTimeDefinitions.DateUnitRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex SpecialDayRegex =
            new Regex(DateTimeDefinitions.SpecialDayRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex WeekDayOfMonthRegex =
            new Regex(DateTimeDefinitions.WeekDayOfMonthRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex RelativeWeekDayRegex =
            new Regex(DateTimeDefinitions.RelativeWeekDayRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex SpecialDate =
            new Regex(DateTimeDefinitions.SpecialDate, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex SpecialDayWithNumRegex =
            new Regex(DateTimeDefinitions.SpecialDayWithNumRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex ForTheRegex =
            new Regex(DateTimeDefinitions.ForTheRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex WeekDayAndDayOfMothRegex =
            new Regex(DateTimeDefinitions.WeekDayAndDayOfMonthRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex RelativeMonthRegex =
            new Regex(
                DateTimeDefinitions.RelativeMonthRegex,
                RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex PrefixArticleRegex =
            new Regex(
                DateTimeDefinitions.PrefixArticleRegex,
                RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex OfMonth =
            new Regex(DateTimeDefinitions.OfMonth, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex MonthEnd =
            new Regex(DateTimeDefinitions.MonthEnd, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex WeekDayEnd =
            new Regex(DateTimeDefinitions.WeekDayEnd, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex YearSuffix =
            new Regex(DateTimeDefinitions.YearSuffix, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex LessThanRegex =
            new Regex(DateTimeDefinitions.LessThanRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex MoreThanRegex =
            new Regex(DateTimeDefinitions.MoreThanRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex InConnectorRegex =
            new Regex(DateTimeDefinitions.InConnectorRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly Regex RangeUnitRegex =
            new Regex(DateTimeDefinitions.RangeUnitRegex, RegexOptions.IgnoreCase | RegexOptions.Singleline);

        public static readonly ImmutableDictionary<string, int> DayOfWeek =
            DateTimeDefinitions.DayOfWeek.ToImmutableDictionary();

        public static readonly ImmutableDictionary<string, int> MonthOfYear =
            DateTimeDefinitions.MonthOfYear.ToImmutableDictionary();

        public DutchDateExtractorConfiguration(IOptionsConfiguration config) : base(config)
        {
            IntegerExtractor = Number.Dutch.IntegerExtractor.GetInstance();
            OrdinalExtractor = Number.Dutch.OrdinalExtractor.GetInstance();
            NumberParser = new BaseNumberParser(new DutchNumberParserConfiguration());
            DurationExtractor = new BaseDurationExtractor(new DutchDurationExtractorConfiguration(this));
            UtilityConfiguration = new DutchDatetimeUtilityConfiguration();
            ImplicitDateList = new List<Regex>
            {
                OnRegex,
                RelaxedOnRegex,
                SpecialDayRegex,
                ThisRegex,
                LastDateRegex,
                NextDateRegex,
                SingleWeekDayRegex,
                WeekDayOfMonthRegex,
                SpecialDate,
                SpecialDayWithNumRegex,
                RelativeWeekDayRegex
            };

            if ((Options & DateTimeOptions.CalendarMode) != 0)
            {
                ImplicitDateList = ImplicitDateList.Concat(new[] {DayRegex});
            }

            const RegexOptions dateRegexOption = RegexOptions.IgnoreCase | RegexOptions.Singleline;

            // 3-23-2017
            var dateRegex4 = new Regex(DateTimeDefinitions.DateExtractor4, dateRegexOption);

            // 23-3-2015
            var dateRegex5 = new Regex(DateTimeDefinitions.DateExtractor5, dateRegexOption);

            // on (Sunday,)? 1.3
            var dateRegex6 = new Regex(DateTimeDefinitions.DateExtractor6, dateRegexOption);

            // on (Sunday,)? 24-12
            var dateRegex8 = new Regex(DateTimeDefinitions.DateExtractor8, dateRegexOption);

            // (Sunday,)? 7/23
            var dateRegex7 = new Regex(DateTimeDefinitions.DateExtractor7, dateRegexOption);

            // (Sunday,)? 23/7
            var dateRegex9 = new Regex(DateTimeDefinitions.DateExtractor9, dateRegexOption);

            // (Sunday,)? 2015-12-23
            var dateRegexA = new Regex(DateTimeDefinitions.DateExtractorA, dateRegexOption);

            DateRegexList = new List<Regex>
            {
                // ((this)? Sunday,)? April 5
                new Regex(DateTimeDefinitions.DateExtractor1, dateRegexOption),

                // ((this)? Sunday,)? April 5, 2016
                new Regex(DateTimeDefinitions.DateExtractor2, dateRegexOption),

                // (Sunday,)? 6th of April
                new Regex(DateTimeDefinitions.DateExtractor3, dateRegexOption),

            };

            var enableDmy = DmyDateFormat || 
                            DateTimeDefinitions.DefaultLanguageFallback == Constants.DefaultLanguageFallback_DMY;

            DateRegexList = DateRegexList.Concat(enableDmy
                ? new[] {dateRegex5, dateRegex8, dateRegex9, dateRegex4, dateRegex6, dateRegex7, dateRegexA}
                : new[] {dateRegex4, dateRegex6, dateRegex7, dateRegex5, dateRegex8, dateRegex9, dateRegexA});
        }

        public IEnumerable<Regex> DateRegexList { get; }

        public IExtractor IntegerExtractor { get; }

        public IExtractor OrdinalExtractor { get; }

        public IParser NumberParser { get; }

        public IDateTimeExtractor DurationExtractor { get; }

        public IDateTimeUtilityConfiguration UtilityConfiguration { get; }

        public IEnumerable<Regex> ImplicitDateList { get; }

        IImmutableDictionary<string, int> IDateExtractorConfiguration.DayOfWeek => DayOfWeek;

        IImmutableDictionary<string, int> IDateExtractorConfiguration.MonthOfYear => MonthOfYear;

        Regex IDateExtractorConfiguration.OfMonth => OfMonth;

        Regex IDateExtractorConfiguration.MonthEnd => MonthEnd;

        Regex IDateExtractorConfiguration.WeekDayEnd => WeekDayEnd;

        Regex IDateExtractorConfiguration.DateUnitRegex => DateUnitRegex;

        Regex IDateExtractorConfiguration.ForTheRegex => ForTheRegex;

        Regex IDateExtractorConfiguration.WeekDayAndDayOfMonthRegex => WeekDayAndDayOfMothRegex;

        Regex IDateExtractorConfiguration.RelativeMonthRegex => RelativeMonthRegex;

        Regex IDateExtractorConfiguration.WeekDayRegex => WeekDayRegex;

        Regex IDateExtractorConfiguration.PrefixArticleRegex => PrefixArticleRegex;

        Regex IDateExtractorConfiguration.YearSuffix => YearSuffix;

        Regex IDateExtractorConfiguration.LessThanRegex => LessThanRegex;

        Regex IDateExtractorConfiguration.MoreThanRegex => MoreThanRegex;

        Regex IDateExtractorConfiguration.InConnectorRegex => InConnectorRegex;

        Regex IDateExtractorConfiguration.RangeUnitRegex => RangeUnitRegex;

    }
}