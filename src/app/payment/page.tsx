// import StripePayment from '@/components/StripePayment'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//         <StripePayment/>
//     </div>
//   )
// }

// export default page



////////

import dynamic from "next/dynamic";
import React from "react";

// ✅ Dynamically import StripePayment, disabling SSR
const StripePayment = dynamic(() => import("@/components/StripePayment"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <StripePayment />
    </div>
  );
};

export default Page;
