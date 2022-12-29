import React from 'react';
import Chapter1 from './Chapters/Chapter1';
import Chapter2 from './Chapters/Chapter2';
import Banner from './components/Banner';
import Clause from './components/Clause';
import SubClause from './components/SubClause';

const App = () => {
  return (
    <>
      <Banner></Banner>
      <div className='w-11/12 lg:w-3/5 mx-auto'>
        <Chapter1></Chapter1>
        <Chapter2></Chapter2>
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
        <details>
          <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ৪১</summary>
          <div className="px-4 pb-4">
            <p>ধর্মীয় স্বাধীনতা</p>
            <Clause>
              <p>(১) আইন শৃঙ্খলা ও নৈতিকতা সাপেক্ষে</p>
              <SubClause>
                <p>(ক) নাগরিক যেকোনো ধর্ম অবলম্বন, পালন বা প্রচার করতে পারবে।</p>
                <p>(খ) প্রত্যেকে নিজ ধর্মীয় প্রতিষ্ঠান স্থাপন, রক্ষণ ও ব্যবস্থাপনা করতে পারবে।</p>
              </SubClause>
              <p>(২) নিজ ধর্ম ব্যতীত অন্য ধর্মীয় শিক্ষাগ্রহণ বা ধর্মীয় অনুষ্ঠানে যোগ দেবার দরকার নেই।</p>
            </Clause>
          </div>
        </details>
        <p>https://drive.google.com/drive/folders/1DDFlMoVk98FM9v_b90i6OYeEtQtA5m16?usp=share_link</p>
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