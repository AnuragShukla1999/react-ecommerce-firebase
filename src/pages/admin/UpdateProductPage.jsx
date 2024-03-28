import { useContext, useEffect } from "react"
import myContext from "../../context/myContext"
import { useNavigate, useParams } from "react-router-dom";
import { Timestamp, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: 'fashion'
  },
  {
    name: 'shirt'
  },
  {
    name: 'jacket'
  },
  {
    name: 'mobile'
  },
  {
    name: 'laptop'
  },
  {
    name: 'shoes'
  },
  {
    name: 'home'
  },
  {
    name: 'books'
  }
]
 

const UpdateProductPage = () => {

  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;


  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);


  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });


  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
       const productTemp = await getDoc(doc(fireDB, "products", id));

       // console.log(product.data());

       const product = productTemp.data();

       setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date
       })
       setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);      
    }
  }


  const updateProduct = async () => {
    setLoading(true);

    try {
      await setDoc(dco(fireDB, 'products', id), product);
      toast.success("Product Updated successfully");
      getAllProductFunction();
      setLoading(false);
      navigate('/admin-dashboard');
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  }

  useEffect(() => {
    getSingleProductFunction();
  }, []);


  return (
    <div>
        <div className="flex justify-center items-center h-screen">
          {loading && <Loader />}

          {/* Login Form */}
          <div className="login_form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

            {/* Top Heading */}
              <div className="mb-5">
                  <h2 className="text-center text-2xl font-bold text-pink-500">
                    Update Product
                  </h2>
              </div>

              {/* Input One */}
              <div className="mb-3">
                <input 
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      title: e.target.value
                    })
                  }}
                  placeholder="='Product Title"
                  className="bg-pink-50 border text-pink-300 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
                />
              </div>

              {/* Input Two */}

              <div className="mb-3">
                  <input 
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={(e) => {
                      setProduct({
                        ...product,
                        price: e.target.value
                      })
                    }}
                    placeholder="Product Price"
                    className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
                  />
              </div>

              {/* Input Three */}
              <div className="mb-3">
                <input 
                  type="text" 
                  name="productImageUrl"
                  value={product.productImageUrl}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      productImageUrl: e.target.value
                    })
                  }}
                  placeholder="='Product Image Url"
                  className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
                />
              </div>
          </div>
        </div>
    </div>
  )
}

export default UpdateProductPage