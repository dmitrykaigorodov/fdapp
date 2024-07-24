import clsx from "clsx";
import { LucideBuilding, LucideCircleCheckBig, LucideCopy, LucideDownload, LucideForward, LucideServer, LucideSmartphone } from "lucide-react";
import { useState } from "react";
import { TopNav } from "./TopNav";


export function ProxyTypeRadioBox({ isActive = false, title, description, Icon, onSelect }) {

  return <div className={clsx({
    "flex p-4 bg-white border border-1  rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={onSelect}
  >
    <span className="flex-1 text-gray-900">
      <strong className="font-medium text-gray-700">{title}</strong>
      <br />
      {description}
    </span>
    <Icon className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

const priceByProxyType = {
  mobile: 7,
  residential: 7,
  dataCenter: 1,
} as const;

function MoneyAmount({ children }) {
  return <strong className="font-medium text-gray-600 tabular-nums">
    ${children}
  </strong>
}

function TrafficAmountBox({ isActive = false, gb = 1, description, onSelect, }) {

  return <div className={clsx({
    "flex w-40 p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={onSelect}
  >
    <span className="flex-1 text-gray-900">
      <strong className="">{gb} GB<br /></strong>
      {description}
    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

export default function GbInput({ value, setValue }) {
  return (
    <div className="w-40 ">
      <div className="relative  rounded-md">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">Trafic</span>
        </div> */}
        <input
          id="trafficNumberInput"
          name="trafficNumberInput"
          type="text"
          placeholder="100"
          aria-describedby="trafic-gb"
          className="block w-full border-0 py-1.5 pl-3 pr-4 text font-semibold leading-10 rounded-md text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span id="trafic-gb" className="text-gray-500 font-semibold">
            GB
          </span>
        </div>
      </div>
      <label htmlFor="trafficNumberInput" className="block font-medium leading-6 text-gray-900 text-fuchsia-600">
        Custom
      </label>

    </div>
  )
}

export function TwoColumnsLayout() {
  const [proxyType, setProxyType] = useState("mobile")
  const [trafic, setTrafic] = useState(1)

  return <div className="bg-gray-50 text-gray-900">
    <TopNav />
    <div className="container bg-gray-50 mx-auto p-6 text-gray-600">
      <div className="">
        <div>
          <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Currently, you have <MoneyAmount>0.00</MoneyAmount> on your proxy account.
            Please, add credits to your account to enable proxies.
          </p>
        </div>

        <div>
          <h1 className="mt-6 mb-4 text-lg font-semibold text-gray-900">
            Add credits
          </h1>
        </div>

        <h3 className="mt-2 mb-4 font-medium">
          Choose proxy type
        </h3>
        <div className="grid  grid-cols-1 md:grid-cols-3  gap-4">
          <ProxyTypeRadioBox
            title="Mobile"
            description={"Best anti-detect"}
            isActive={proxyType === 'mobile'}
            Icon={LucideSmartphone}
            onSelect={() => setProxyType('mobile')}
          />
          <ProxyTypeRadioBox
            title="Residential"
            description={"Best anti-detect"}
            isActive={proxyType === 'residential'}
            Icon={LucideBuilding}
            onSelect={() => setProxyType('residential')}
          />
          <ProxyTypeRadioBox
            title="Data center"
            description={"More affordable"}
            isActive={proxyType === 'dataCenter'}
            Icon={LucideServer}
            onSelect={() => setProxyType('dataCenter')}
          />
        </div>
        <h2 className="mt-6 mb-4 font-regular">
          Traffic, Gb
        </h2>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <TrafficAmountBox
              gb={1}
              description="Hobby"
              isActive={trafic === 1}
              onSelect={() => setTrafic(1)}
            />
            <TrafficAmountBox
              gb={7}
              description="Startup"
              isActive={trafic === 7}
              onSelect={() => setTrafic(7)}
            />
            <TrafficAmountBox
              gb={30}
              description="Business"
              isActive={trafic === 30}
              onSelect={() => setTrafic(30)}
            />
            <TrafficAmountBox
              gb={120}
              description="Enterprize"
              isActive={trafic === 120}
              onSelect={() => setTrafic(120)}
            />
          </div>

          <div className="relative flex pl-1 border-r-2 border-fuchsia-500 mr-1">
            <span className="absolute left-[-2px] top-[28px] bg-gray-50">or</span>
          </div>

          <span>
            <GbInput value={trafic} setValue={setTrafic} ></GbInput>
            {/* <input
                className="border-gray-300 w-16 px-2 py-2 mx-2 border rounded"
                type="number"
                value={trafic}
                />&nbsp;Gb */}
          </span>
        </div>

        <div className="px-4 w-[336px] py-6 mt-8 bg-white border rounded-xl">
          <h1 className="pb-2 font-semibold text-lg text-gray-900">Order summary</h1>

          <div className="grid my-4 grid-cols-2 gap-2">
            <div className="min-2-60">
              <strong className="font-semibold">
                Proxy type
              </strong>
            </div>
            <div>
              {proxyType}
            </div>

            <div className="min-2-60">
              <strong className="font-semibold">
                Price, per GB
              </strong>
            </div>
            <div>
              ${priceByProxyType[proxyType]}
              {" "}<span className="text-gray-400">/ GB</span>
            </div>

            <div className="min-2-60">
              <strong className="font-semibold">
                Quantity
              </strong>
            </div>
            <div>
              {trafic} GB
            </div>

            <div className="col-span-2 mb-1 py-1 border-b border-gray-300"></div>

            <div className="min-2-60">
              <strong className="font-semibold text-gray-900">
                Total
              </strong>
            </div>
            <div>
              ${priceByProxyType[proxyType] * trafic}.00
            </div>
          </div>
          <div>
          </div>

        </div>

        {/* <button className="mt-4 py-2 px-4 border bg-fuchsia-600 text-fuchsia-100 rounded-lg">
          Proceed to checkout
        </button> */}



        <h2 className="mt-6 mb-4 font-medium">
          Proceed to checkout
        </h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <h1 className="mt-6 mb-4 text-lg font-semibold text-gray-900">
          Proxy list
        </h1>

        <p>Select proxy locations and number of unique IPs to generate list of proxy server.</p>

        <div>
          <h2 className="mt-6 mb-4 font-medium">
            Proxy location
          </h2>


        </div>


        <div>
          <h3 className="mt-6 mb-2 font-regular">
            Number of proxies
          </h3>
          <input
            className="bg-white border p-2 mb-2 rounded"
            value={10}>
          </input>
        </div>


        <div>
          <button className="py-2 px-4 border bg-fuchsia-600 text-fuchsia-100 rounded-lg">
            Generate proxies
          </button>
        </div>

        <h3 className="mt-6 mb-2 font-regular">
          Proxy list
        </h3>
        <textarea rows={10} cols={40} className="w-full border rounded my-2" />

        <div>
          <button className="inline-block py-1 px-2 mr-2 border border-fuchsia-600 text-sm text-fuchsia-600 font-semibold rounded-lg">
            Copy proxy list <LucideCopy className="inline-block h-4" />
          </button>
          <button className="inline-block py-1 px-2 mr-2 border border-fuchsia-600 text-sm text-fuchsia-600 font-semibold rounded-lg">
            Download as txt<LucideDownload className="inline-block h-4" />
          </button>
          <button className="inline-block py-1 px-2 mr-2 border border-fuchsia-600 text-sm text-fuchsia-600 font-semibold rounded-lg">
            Share via email<LucideForward className="inline-block h-4" />
          </button>
        </div>

      </div>



    </div>
    <div>
    </div>
  </div>
}