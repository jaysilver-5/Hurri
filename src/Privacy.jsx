import Footer from './Footer'
import Header from './Header'
import React from 'react'
import './tailwind.css'

const Privacy = () => {
  return (
    <div className='px-16 flex min-h-screen flex-col justify-between w-full'>
        <div className='mt-12 py-8 px-12 '>
            <div className='xl:mt-16 flex flex-col gap-y-4 py-4 lg:mt-12 md:mt-8 xl:p-12 lg:p-10  rounded-xl md:p-8 p-6 mt-4 text[52px] text-[#fff] inset-0 bg-[#202020]'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-[32px] font-primary font-thin'>Our Privacy Policy</h1>
                    <p>
                        At Hurri Logistics, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our services, website, and mobile applications (collectively referred to as &quot;Services&quot;). By using our Services, you consent to the practices described in this Privacy Policy.
                    </p>
                </div>   
                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>1. Information We Collect</h1>
                    <p>
                        We may collect the following types of information:
                    </p>
                    <p>
                        <span className='font-bold'>1.1. Personal Information:</span> When you create an account or use our Services, we may collect personal information such as your name, email address, phone number, and delivery address.
                    </p>
                    <p>
                        <span className='font-bold'>1.2. Location Information:</span> To enhance and customize your experience, including optimizing our routes, services, and customer support.
                    </p>
                    <p>
                        <span className='font-bold'>1.3. Transaction Information:</span> We collect information related to your deliveries, including order details, payment information, and transaction history.
                    </p>
                    <p>
                        <span className='font-bold'>1.4. Device Information:</span> We may collect information about the device you use to access our Services, including device type, operating system, and unique device identifiers.
                    </p>
                    <p>
                        <span className='font-bold'>1.5. Log Data:</span> We automatically collect log data, which may include IP addresses, browser type, pages viewed, and access times.
                    </p>
                </div>  

                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>2. How We Use Your Information</h1>
                    <p>
                        We use your information for the following purposes:
                    </p>
                    <p>
                        <span className='font-bold'>2.1. Provide Services:</span> To facilitate and fulfill delivery requests, process payments, and offer customer support.
                    </p>
                    <p>
                        <span className='font-bold'>2.2. Improve Services:</span> To enhance and customize your experience, including optimizing our routes, services, and customer support.
                    </p>
                    <p>
                        <span className='font-bold'>2.3. Communications:</span> To send you updates, promotional offers, and important service-related information.
                    </p>
                    <p>
                        <span className='font-bold'>2.4. Safety and Security:</span>To verify your identity, monitor for fraud, and ensure the safety of our couriers and customers.
                    </p>
                    <p>
                        <span className='font-bold'>2.5. Legal Compliance:</span>To comply with legal obligations and respond to lawful requests from authorities.
                    </p>
                </div>  

                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>3. Sharing Your Information</h1>
                    <p>
                    We may share your information in the following circumstances:
                    </p>
                    <p>
                        <span className='font-bold'>3.1. Service Providers:</span> We may share information with trusted third-party service providers who assist us in delivering our services.
                    </p>
                    <p>
                        <span className='font-bold'>3.2. Legal Compliance:</span> We may disclose information when required by law, government agencies, or to protect our rights, privacy, safety, or property.
                    </p>
                    <p>
                        <span className='font-bold'>3.3. Business Transfers: </span> In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred to the new owner.
                    </p>
                </div>  

                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>4. Your Choices</h1>
                    <p>
                        <span className='font-bold'>4.1. Account Information:</span> You can review and update your account information by logging into your Hurri account.
                    </p>
                    <p>
                        <span className='font-bold'>4.2. Marketing Communications:</span> You can opt out of receiving promotional emails or SMS messages by following the unsubscribe instructions in these communications.
                    </p>
                </div>  

                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>5. Security</h1>
                    <p>
                        We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.
                    </p>
                </div>  

                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>6. Changes to this Privacy Policy</h1>
                    <p>
                        We may update this Privacy Policy from time to time, and any changes will be posted on our website or mobile app. It is your responsibility to review this policy periodically.
                    </p>
                </div>  

                <div className='flex flex-col gap-y-1'>
                    <h1 className='text-[28px] font-primary font-thin'>7. Contact Us</h1>
                    <p>
                        If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at: <a>hurrilogistics@gmail.com</a>  or visit <a href='https://hurri.ng' className='text-[#0070F3]'>hurri.ng</a>
                    </p>
                    <p>
                        By using our Services, you agree to the terms outlined in this Privacy Policy. If you do not agree with any aspect of this policy, please do not use our Services.
                    </p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Privacy