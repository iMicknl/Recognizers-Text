using Microsoft.Recognizers.Text.DataDrivenTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Microsoft.Recognizers.Text.Number.Tests
{
    [TestClass]
    public class TestNumber_English : TestBase
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

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV", "NumberModel-English.csv", "NumberModel-English#csv", DataAccessMethod.Sequential)]
=======
        [NetCoreTestDataSource]
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        [TestMethod]
        public void NumberModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void NumberModelPercentMode(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void NumberModelExperimentalMode(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void OrdinalModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
        }

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV", "OrdinalModelEnablePreview-English.csv", "OrdinalModelEnablePreview-English#csv", DataAccessMethod.Sequential)]
        [TestMethod]
        public void OrdinalModelEnablePreview()
        {
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void PercentModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void PercentModelPercentMode(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void NumberRangeModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void NumberRangeModelExperimentalMode(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }
    }
}
