using Microsoft.Recognizers.Text.DataDrivenTests;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Microsoft.Recognizers.Text.Sequence.Tests
{
    [TestClass]
    public class TestSequence_English : TestBase
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
            this.TestSpecInitialize(TestResources);
        }

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV", "PhoneNumberModel-English.csv", "PhoneNumberModel-English#csv", DataAccessMethod.Sequential)]
=======
        [NetCoreTestDataSource]
>>>>>>> Enable Microsoft.Recognizers.Text.DataDrivenTests.csproj for .Net Core
        [TestMethod]
        public void PhoneNumberModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestPhoneNumber();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void IpAddressModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestIpAddress();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void MentionModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestMention();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void HashtagModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestHashtag();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void EmailModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestEmail();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void URLModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestURL();
        }

        [NetCoreTestDataSource]
        [TestMethod]
        public void GUIDModel(TestModel testSpec)
        {
            TestSpec = testSpec;
            TestGUID();
        }
    }
}
