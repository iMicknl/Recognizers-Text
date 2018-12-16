using Microsoft.Recognizers.Text.DataDrivenTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Microsoft.Recognizers.Text.Number.Tests
{
    [TestClass]
    public class TestNumber_Spanish : TestBase
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

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV", "NumberModel-Spanish.csv", "NumberModel-Spanish#csv", DataAccessMethod.Sequential)]
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
        public void OrdinalModel(TestModel testSpec)
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
        public void PercentModel(TestModel testSpec)
        {
<<<<<<< HEAD
            TestNumber();
=======
            TestSpec = testSpec;
            base.TestNumber();
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        }

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV", "NumberRangeModel-Spanish.csv", "NumberRangeModel-Spanish#csv", DataAccessMethod.Sequential)]
        [TestMethod]
        public void NumberRangeModel()
        {
            TestNumber();
        }
    }
}
