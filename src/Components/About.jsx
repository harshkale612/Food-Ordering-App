const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-blue-700">Foodify</span> — your
          go-to destination for{" "}
          <span className="text-orange-500 font-medium">delicious meals</span>{" "}
          delivered straight to your doorstep.
          <br />
          <br />
          We believe in serving{" "}
          <span className="italic text-green-600">
            fresh, hygienic, and mouth-watering dishes
          </span>{" "}
          that bring joy to every bite. Whether it’s a quick snack or a
          full-course meal, we’ve got something special for everyone!
        </p>
      </div>
    </div>
  );
};

export default About;
