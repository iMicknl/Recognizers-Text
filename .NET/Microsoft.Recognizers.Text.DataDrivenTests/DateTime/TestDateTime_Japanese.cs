﻿using System.Collections.Generic;
using Microsoft.Recognizers.Text.DataDrivenTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Microsoft.Recognizers.Text.DateTime.Tests
{
    [TestClass]
    public class TestDateTime_Japanese : TestBase
    {
        public static IDictionary<string, IDateTimeExtractor> Extractors { get; private set; }
        public static IDictionary<string, IDateTimeParser> Parsers { get; private set; }

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            Extractors = new Dictionary<string, IDateTimeExtractor>();
            Parsers = new Dictionary<string, IDateTimeParser>();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void DateExtractor(TestModel testSpec)
        {
            TestSpec = testSpec;
            base.ExtractorInitialize(Extractors);
            base.TestDateTimeExtractor();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void DateParser(TestModel testSpec)
        {
            TestSpec = testSpec;
            base.ExtractorInitialize(Extractors);
            base.ParserInitialize(Parsers);
            base.TestDateTimeParser();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void DatePeriodParser(TestModel testSpec)
        {
            TestSpec = testSpec;
            base.ExtractorInitialize(Extractors);
            base.ParserInitialize(Parsers);
            base.TestDateTimeParser();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public new void DateTimeParser(TestModel testSpec)
        {
            TestSpec = testSpec;
            base.ExtractorInitialize(Extractors);
            base.ParserInitialize(Parsers);
            base.TestDateTimeParser();
        }
    }
}
