import { SVGProps } from "react";

export function TG(props: SVGProps<SVGSVGElement>) {
    // return (
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 24 24"
    //     width="4.7dvw"
    //     height="4.7dvw"
    //     {...props}
    //   >
    //     <g fill="none">
    //       <g clipPath="url(#akarIconsTelegramFill0)">
    //         <path
    //           fill="currentColor"
    //           fillRule="evenodd"
    //           d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859q-1.75.728-6.998 3.014q-.852.339-.893.663c-.046.366.412.51 1.034.705l.263.084c.613.199 1.437.432 1.865.441q.583.012 1.302-.48q4.902-3.31 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504q-.143.145-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943q.21.14.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2 2 0 0 0-.02-.472a.5.5 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635"
    //           clipRule="evenodd"
    //         ></path>
    //       </g>
    //       <defs>
    //         <clipPath id="akarIconsTelegramFill0">
    //           <path fill="#fff" d="M0 0h24v24H0z"></path>
    //         </clipPath>
    //       </defs>
    //     </g>
    //   </svg>
    // )
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="3dvw"
          height="3dvw"
          style={{transform: 'translateX(-5%)'}}
          {...props}
        >
          <path
            fill="currentColor"
            d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"
          ></path>
        </svg>
      )
  }