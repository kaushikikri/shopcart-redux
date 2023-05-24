import { useTitle } from "../hook/useTitle";
import { Products } from "../components";

export const Home = ({ title }) => {
  useTitle(title);

  const products = [
    { "id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/1001.png" },
    { "id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/1002.png" },
    { "id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/1003.png" },
    { "id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/1004.png" },
    { "id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/1005.png" },
    { "id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/1006.png" }
  ]

  return (
    <main>

      <div className="flex justify-center md:justify-between flex-wrap my-10 gap-7">
        {products.map((product) => (<Products key={product.id} product={product} />))}

      </div>
    </main>
  )
}
