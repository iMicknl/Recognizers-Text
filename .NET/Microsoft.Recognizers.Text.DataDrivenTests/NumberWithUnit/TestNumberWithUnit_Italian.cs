﻿using Microsoft.Recognizers.Text.DataDrivenTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Microsoft.Recognizers.Text.NumberWithUnit.Tests
{
    [TestClass]
    public class TestNumberWithUnit_Italian : TestBase
    {
<<<<<<< HEAD
        public static TestResources TestResources { get; protected set; }

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            TestResources = new TestResources();
            TestResources.InitFromTestContext(context);
        }

        [TestInitialize]
        public void TestInitialize()
        {
            TestSpecInitialize(TestResources);
        }

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV", "AgeModel-Italian.csv", "AgeModel-Italian#csv", DataAccessMethod.Sequential)]
=======
        [NetCoreTestDataSource]
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        [TestMethod]
        public void AgeModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumberWithUnit();
=======
            TestSpec = testSpec;
            base.TestNumberWithUnit();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void CurrencyModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumberWithUnit();
=======
            TestSpec = testSpec;
            base.TestNumberWithUnit();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void DimensionModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumberWithUnit();
=======
            TestSpec = testSpec;
            base.TestNumberWithUnit();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void TemperatureModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumberWithUnit();
=======
            TestSpec = testSpec;
            base.TestNumberWithUnit();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }
    }
}
