import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [hex, setHex] = useState("#ffffff");
  const [newArray, setNewArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTestimonials = async () => {
    setLoading(true);
    await axiosClient
      .get("/testimonials")
      .then((res) => {
        setTestimonials(res?.data?.testimonials);
        randomizeColor(res?.data?.testimonials);
      })
      .catch((err) => {
        toast.error(err?.response?.message);
      });
  };

  const randomizeColor = (test) => {
    const t = [];
    for (let i = 0; i < test.length; i++) {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      test[i].color = randomColor;
      t.push(test[i]);
    }
    setNewArray(t);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div>
      <div className="sub-hero w-full">
        <div className="h-full bg-[rgba(0,0,0,0.4)]">
          <div className="flex flex-col items-center justify-around h-full lg:w-[800px] mx-auto text-white text-center py-14 px-5">
            <h1 className="text-5xl text-[rgb(0,223,154)] font-bold">
              Testimonials
            </h1>
            <p className="">
              With a drive to create relations between enterpreneurs and
              bussiness people. We aim to raise funds for start-ups. Have a read
              on some of our happy connects.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1200px] lg:w-[1200px] columns-3 gap-5 space-y-3 mx-auto px-5 lg:px-24 py-10 text-center">
        {/* <div className="lg:max-w-[1200px] lg:w-[1200px] grid grid-cols-3 gap-5 mx-auto px-5 lg:px-24 py-10 text-center"> */}
        {newArray.length > 0 ? (
          <>
            {newArray.map((testimonial) => {
              let objectColor = testimonial.color;
              console.log(objectColor);
              return (
                <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
                  <div className="mx-auto">
                    <div
                      className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
                      style={{ backgroundColor: `${objectColor}` }}
                    ></div>
                  </div>
                  <div className="mt-5">
                    <h2 className="font-semibold mb-2">{testimonial.name}</h2>

                    <p className="text-gray-700">{testimonial.testimonial}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Amet consectetur adipisicing elit. Beatae omnis est velit.
              Blanditiis adipisci molestias architecto omnis fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.Blanditiis adipisci molestias architecto omnis
              fugit vel harum.Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              repudiandae incidunt excepturi corporis, quod impedit ea provident
              unde dolorem nobis ut est animi, doloremque aspernatur, ullam
              inventore maxime consequuntur. Voluptas.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, quaerat.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              ullam est corrupti quam eius! Vitae magnam mollitia temporibus
              eveniet inventore.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptates ratione error officiis quod sequi alias hic veritatis
              maiores maxime omnis, est quaerat odio ex iusto deleniti ut.
              Totam, culpa.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quis, molestias corrupti dolor iure, voluptatem ab
              itaque sed exercitationem fugiat obcaecati eaque architecto atque?
              Corrupti laudantium laborum repellat, vero architecto doloribus
              delectus nam quibusdam amet rem, omnis ipsa adipisci nobis!
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              nulla harum expedita maiores fugiat, delectus at facere
              consectetur ut officia asperiores laudantium minima? Nisi
              explicabo tempore velit cupiditate, nihil deserunt ex
              reprehenderit dignissimos quasi voluptas reiciendis alias quae
              illo dolorem necessitatibus facilis ut sapiente quisquam
              voluptatum beatae quo aut animi.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              culpa! Ipsam, veniam aut tenetur facilis officia explicabo ad
              inventore quo quae temporibus ratione! Vero fuga iure harum
              consequuntur. Temporibus nobis sapiente quam itaque aspernatur
              laudantium quisquam dicta magnam quis, sequi corrupti in error
              perferendis praesentium accusantium nesciunt facilis amet quae
              beatae provident laborum nisi nihil! Consequuntur molestiae quam
              magnam quidem!
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              esse neque explicabo excepturi, in vel repellat error magni alias
              quasi?
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              expedita repellendus earum numquam quasi non, eos autem
              exercitationem accusantium aliquam. Deserunt asperiores quod
              provident dignissimos aliquid fugiat, pariatur adipisci ipsam
              dolor, consectetur vero, quis fuga totam amet tempore. Amet,
              ratione!
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg bg-white p-5 break-inside-avoid">
          <div className="mx-auto">
            <img
              src=""
              alt=""
              className="h-24 w-24 rounded-full p-1 border-2 border-[rgb(0,223,154)]"
            />
          </div>
          <div className="mt-5">
            <h2 className="font-semibold mb-2">Investor Name</h2>

            <div className="bg-[rgba(0,223,154,0.07)] font-semibold rounded-full my-2 p-2">
              US$ 1,000 - US$5,000
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              omnis est velit. Blanditiis adipisci molestias architecto omnis
              fugit vel harum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
