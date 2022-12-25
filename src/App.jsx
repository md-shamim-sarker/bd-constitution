import React from 'react';
import Banner from './components/Banner';
import Clause from './components/Clause';
import SubClause from './components/SubClause';

const App = () => {
  return (
    <>
      <Banner></Banner>
      <div className='w-11/12 lg:w-3/5 mx-auto'>
        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ১</summary>
          <div className="px-4 pb-4">
            <p>বাংলাদেশ একটি একক, স্বাধীন ও সার্বভৌম প্রজাতন্ত্র, যা ‘গণপ্রজাতন্ত্রী বাংলাদেশ’ নামে পরিচিত হবে।</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ৩</summary>
          <div className="px-4 pb-4">
            <p>প্রজাতন্ত্রের রাষ্ট্রভাষা বাংলা।</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ৫</summary>
          <div className="px-4 pb-4">
            <p>রাজধানী</p>
            <Clause>
              <p>(১) প্রজাতন্ত্রের রাজধানী ঢাকা।</p>
              <p>(২) রাজধানীর সীমানা আইনের দ্বারা নির্ধারিত হবে।</p>
            </Clause>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ১২</summary>
          <div className="px-4 pb-4">
            <p>ধর্ম নিরপেক্ষতা ও ধর্মীয় স্বাধীনতা</p>
            <Clause>
              <p>(ক) কোনো রকম সাম্প্রদায়িকতা থাকবে না।</p>
              <p>(খ) রাষ্ট্র কোনো ধর্মকে রাজনৈতিক মর্যাদা দেবে না।</p>
              <p>(গ) রাজনৈতিক উদ্দেশ্যে ধর্মীয় অপব্যবহার করা যাবে না।</p>
              <p>(ঘ) ধর্মের কারণে কোনো ব্যক্তির প্রতি বৈষম্য বা নিপীড়ন করা যাবে না।</p>
            </Clause>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ২৭</summary>
          <div className="px-4 pb-4">
            <p>আইনের দৃষ্টিতে সমতা: সকল নাগরিক আইনের দৃষ্টিতে সমান এবং আইনের সমান আশ্রয়লাভের অধিকারী।</p>
          </div>
        </details>
        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ২৮</summary>
          <div className="px-4 pb-4">
            <p>ধর্ম প্রভৃতি কারণে বৈষম্য</p>
            <Clause>
              <p>(১) ধর্ম, গোষ্ঠি, বর্ণ, নারীপুরুষভেদ বা জন্মস্থানের কারণে বৈষম্য করা যাবে না।</p>
              <p>(২) রাষ্ট্র ও গণজীবনে নারী পুরুষের সমান অধিকার পাবে।</p>
              <p>(৩) ধর্ম, গোষ্ঠি, বর্ণ, নারীপুরুষভেদ বা জন্মস্থানের কারণে বিনোদনস্থানে প্রবেশ ও শিক্ষা-প্রতিষ্ঠানে ভর্তির
                ব্যাপারে বৈষম্য করা যাবে না।
              </p>
              <p>(৪) সরকার নারী, শিশু বা অনগ্রসর অংশের জন্য বিশেষ বিধান প্রণয়ন করতে পারবে। </p>
            </Clause>
          </div>
        </details>
        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ২৯</summary>
          <div className="px-4 pb-4">
            <p>সরকারি নিয়োগ-লাভে সুযোগের সমতা</p>
            <Clause>
              <p>(১) সরকারি নিয়োগ-লাভে সকলের সুযোগের সমতা থাকবে।</p>
              <p>(২) ধর্ম, গোষ্ঠি, বর্ণ, নারীপুরুষভেদ বা জন্মস্থানের কারণে সরকারি নিয়োগ-লাভে বৈষম্য করা যাবে না।</p>
              <p>(৩) এই অনুচ্ছেদ অনুযায়ী সরকার</p>
              <SubClause>
                <p>(ক) অনগ্রসর অংশের জন্য বিশেষ বিধান প্রণয়ন করতে পারবে।</p>
                <p>(খ) ধর্মীয় প্রতিষ্ঠানের নিয়োগ সংরক্ষণ করতে পারবে।</p>
                <p>(গ) নারী-পুরুষের জন্য বিশেষ নিয়োগ সংরক্ষণ করতে পারবে।</p>
              </SubClause>
            </Clause>
          </div>
        </details>
      </div>
    </>
  );
};

export default App;

/*
<details>
  <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ </summary>
  <div className="px-4 pb-4">
  </div>
</details>
*/