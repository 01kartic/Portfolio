export default function Tabs({ title, tabData }) {
  return (
    <>
      <p className="text-center text-xs sm:text-sm font-semibold sm:font-bold tracking-[0.3rem] opacity-30 mt-8 mb-3 uppercase">
        {title}
      </p>

      <div className="flex flex-col justify-center mx-auto item-center my-4">
        {tabData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target={item.url == "" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="SocialTabs relative block w-[340px] h-16 mx-2 mb-4 border border-blue-100 rounded-2xl hover:border-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-16 rounded-2xl bgGradientForTab opacity-0 transition-opacity duration-200 ease-in-out"></div>
            <div className="flex items-center justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[316px] h-[40px] rounded-2xl z-0">
              <img src={item.imageUrl} className="w-8 h-8 rounded-lg mx-1" />
              <div className="flex flex-col items-end justify-between w-[240px]">
                <p className="w-full font-medium">{item.text}</p>
                {item.subText && <p className="w-full text-xs text-gray-400">{item.subText}</p>}
              </div>
              <svg
                xmlns="http://w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M11.9 1C11.9 0.502944 11.4971 0.1 11 0.1H2.9C2.40294 0.1 2 0.502944 2 1C2 1.49706 2.40294 1.9 2.9 1.9H10.1V9.1C10.1 9.59706 10.5029 10 11 10C11.4971 10 11.9 9.59706 11.9 9.1V1ZM0.363604 10.3636C0.012132 10.7151 0.012132 11.2849 0.363604 11.6364C0.715076 11.9879 1.28492 11.9879 1.6364 11.6364L0.363604 10.3636ZM10.3636 0.363604L0.363604 10.3636L1.6364 11.6364L11.6364 1.6364L10.3636 0.363604Z"
                  fill="#000000"
                  fill-opacity="0.24"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}