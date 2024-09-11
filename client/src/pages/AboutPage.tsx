import AboutImage1 from "../assets/about/about1.png";
import AboutImage2 from "../assets/about/about2.png";
export default function AboutPage() {
  return (
    <div>
      <div className="">
        <div className="container flex flex-col items-center justify-center mx-auto md:flex-row md:justify-between">
          <div className="px-5 md:w-1/2 ">
            <div className="mb-4">
              <h2 className="mb-4 text-lg font-bold md:text-4xl font-work">
                About Our Temporary Car <br /> Insurance Experts
              </h2>
              <p className="text-lg font-medium font-lato">
                GoShorty is a provider of Short Term Insurance <br /> sometimes
                called Temporary Vehicle Insurance.
              </p>
            </div>
            <p className="mb-2 text-sm text-gray-700 font-lato">
              We offer Short Term Car Insurance, Short Term Van Insurance, and
              Short Term Learner Driver Insurance. Short Term Insurance is our
              specialism. It is the only type of insurance we offer and we are
              experts in the field.
            </p>
          </div>
          <div className="px-5 py-8 ">
            <img
              src={AboutImage1}
              alt="About Us Image"
              className="max-w-md min-h-fit"
            />
          </div>
        </div>
        <div className="py-16 bg-[#F5FBFC] ">
          <div className="container flex flex-col items-center mx-auto">
            <h2 className="mb-4 text-lg font-bold text-center md:text-4xl font-work">
              Brand Foundations
            </h2>
            <div className="flex flex-col items-center justify-center md:flex-row ">
              <div className="px-5 py-8 ">
                <img
                  src={AboutImage2}
                  alt="About Us Image"
                  className="max-w-md min-h-fit"
                />
              </div>
              <div className="px-5 md:w-1/2 ">
                <div className="mb-4">
                  <p className="text-lg font-medium font-lato">
                    To merge exceptional customer experience with innovation to
                    make it as simple as possible for everyone to get to where
                    they need to be.
                  </p>
                </div>
                <p className="mb-2 text-sm text-gray-700 font-lato">
                  The GoShorty brand exists to provide the ultimate convenience
                  and confidence for those who need short-term vehicle
                  insurance. We give people 24-hour access to affordable,
                  easy-to use instant insurance that allows them to use another
                  person’s vehicle for however long (or short) they need. What
                  makes us unique is that we put the customer experience at the
                  heart of the business, with a fast and efficient online
                  journey supported by a friendly and accessible customer
                  service team. Built by passionate insurance experts, GoShorty
                  has an impressive panel of insurers and wide acceptance
                  criteria, which gives our drivers a broader choice of cover in
                  comparison to its competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-16">
          <div className="bg_vector"></div>
          <div className="container mx-auto">
            <h2 className="text-lg font-bold text-center md:text-4xl font-work">
              What we provide
            </h2>
            <p className="text-xs text-center text-muted-foreground">
              Cover from 1 hour to 28 days in an instant
            </p>

            <div className="grid items-center grid-cols-2 gap-4 py-8 md:grid-cols-4">
              <div className="max-w-56 py-8  rounded shadow-lg bg-[#4B4DED] md:mt-16 flex items-center justify-center">
                <h3 className="text-lg font-bold text-center text-white font-work">
                  Hourly car <br /> insurance
                </h3>
              </div>
              <div className="flex items-center justify-center py-8 bg-white rounded shadow-lg max-w-56">
                <h3 className="text-lg font-bold text-center font-work">
                  Daily car <br /> insurance
                </h3>
              </div>
              <div className="flex items-center justify-center py-8 bg-white rounded shadow-lg max-w-56 md:mt-16">
                <h3 className="text-lg font-bold text-center font-work">
                  Weekly car <br /> insurance
                </h3>
              </div>
              <div className="flex items-center justify-center py-8 bg-white rounded shadow-lg max-w-56">
                <h3 className="text-lg font-bold text-center font-work">
                  Monthly car <br /> insurance
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
