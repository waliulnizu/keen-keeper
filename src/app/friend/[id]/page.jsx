import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FriendDetails = async ({ params }) => {

    const { id } = await params;
    // console.log(id)

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10">

        <h1 className="text-2xl font-bold">
          Friend Details Page
        </h1>

        <p>ID: {id}</p>

      </div>

      <Footer />
    </div>
  );
};

export default FriendDetails;