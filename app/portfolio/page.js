// app/certificates/page.tsx
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import BackToTop from "../components/BackToTop"; // adjust the path as needed

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Home | John Roy Geralde</title>
      </Head>
      <div className="w-full px-2 py-4 max-w-full mx-auto">
        <h2 className="text-2xl font-semibold transform hover:scale-105 transition-transform duration-200"> <FontAwesomeIcon icon={faBriefcase} className="mr-2 "/>My Job Portfolio - John Roy Geralde</h2>
        <hr />
      </div>

      <div className="flex flex-col md:flex-row min-h-screen gap-4 p-0 m-0.5">
      
        {/* Left Column */}
        <div className="w-full md:w-[50%] p-4 bg-white rounded-lg shadow">
          {/* Hotel Guest Registration, Billing and Collection System */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">

            <h2 className="mb-2"><b>1. Hotel Guest Reservation, Registration, Billing and Collection System</b></h2>
            <h4 className="mb-2">A python web app developed in Odoo 19 Community Edition and PostgreSQL,  It is used by the hotel concierge to reserved rooms, accept guests, make regular room bills and collect guests payments.
            </h4>
            <h4 className="mb-2">My Role: <b>Sole Full Stack Developer</b></h4>       

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Hotel System</h3>
              <img
                    src="/assets/images/HotelMenu.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
              </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Guest Registration Page (Anonymized) </h3>
              <img
                    src="/assets/images/HotelGRC.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Guest Bill (Anonymized) </h3>
              <img
                    src="/assets/images/GuestBill.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Guest Bill Report (Anonymized) </h3>
              <img
                    src="/assets/images/GuestBillpdf.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   



          </div>

          {/* 3. Student Registration, Billing and Collection System */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2"><b>3. Student Registration, Billing and Collection System</b></h2>
            <h4 className="mb-2">The revenue component of a school management system used to generate student bills upon enrollment, collect payments and make corresponding adjustments for discounts and scholarships.  It generates student registration summaries and cash collection and adjustments. The database backend is MS SQL server.
            </h4>
            <h4 className="mb-2">My Role: <b>Sole Developer</b></h4>       

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Student Registration (Anonymized)</h3>
              <img
                    src="/assets/images/StudentRegistration.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Student Ledger (Anonymized)</h3>
              <img
                    src="/assets/images/StudentLedger.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Student Master List (Anonymized)</h3>
              <img
                    src="/assets/images/StudentMasterList.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Chart of Accounts (Anonymized)</h3>
              <img
                    src="/assets/images/ChartofAccountsSchool.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   
            

          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[50%] p-4 bg-white rounded-lg shadow">        
          {/* 2. Wharf Operation System */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2"><b>2. Wharf Operation System</b></h2>
            <h4 className="mb-2">A windows desktop application designed to support wharf operations including Inventory Management, 
            Disbursements and Payments, Cash Receipts, Accounts Receivables and Payables and Adjustments and Other Journal Adjustments. The database backend is My SQL.
            </h4>
            <h4 className="mb-2">My Role: <b>Sole Developer</b></h4>       

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Warehouse Inventory System  (Anonymized)</h3>
              <img
                    src="/assets/images/InventoryManagement.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>   

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Inventory Summary Report (Anonymized)</h3>
              <img
                    src="/assets/images/InventorySummary.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Chart of Accounts (Anonymized)</h3>
              <img
                    src="/assets/images/ChartofAccounts.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Purchase Journal (Anonymized)</h3>
              <img
                    src="/assets/images/PurchaseJournals.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Cash Disbursement Journal (Anonymized)</h3>
              <img
                    src="/assets/images/CashDisbursementJournal.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Customer Quotations (Anonymized)</h3>
              <img
                    src="/assets/images/CustomerQoutations.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  


          </div>
          {/* 4. Company Payroll System */}
          <div className="mt-4 mb-4 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20 transform hover:scale-105 transition-transform duration-200">
            <h2 className="mb-2"><b>4. Company Payroll System</b></h2>
            <h4 className="mb-2">A windows desktop app used to generate semi monthly payroll based on a Employee 201 list. It also uses lookup tables to
            compute government required premiums.  It has email facility to send individual payslips by email. The database backend is My SQL.
            </h4>
            <h4 className="mb-2">My Role: <b>Sole Developer</b></h4>       

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Employee Master List (Anonymized)</h3>
              <img
                    src="/assets/images/EmployeeMasterList.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Payroll Register (Anonymized)</h3>
              <img
                    src="/assets/images/PayrollRegistry.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Employee Payslip (Anonymized)</h3>
              <img
                    src="/assets/images/EmployeePayslip.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Email Facility</h3>
              <img
                    src="/assets/images/EmailFacility.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

            <div className="mt-2 mb-2 p-4 bg-white rounded-lg shadow border-2 border-gray-500/20">
              <h3 className="mt-1 mb-2" >The Lookup Tables</h3>
              <img
                    src="/assets/images/LookupTables.JPG"
                    alt="Avatar"
                    className="mt-1 mb-1 rounded-lg  border-2 border-black-900"
                  />
            </div>  

          </div>

        </div>

      </div>  
         {/* Floating Back to Top Button */}
         <BackToTop />
    </>
  );
}
