import React from 'react';
import Clause from '../components/Clause';

const Chapter2 = () => {
    return (
        <>
            <details>
                <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ৮</summary>
                <div className="px-4 pb-4">
                    <p>মূলনীতিসমূহ</p>
                    <Clause>
                        <p>(১) জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র ও ধর্মনিরপেক্ষতা; এই নীতিগুলো এবং এর থেকে উৎপন্ন এই ভাগে অন্য সকল নীতি হবে রাষ্ট্র পরিচালনার মূলনীতি।</p>
                        <p>(২) এই নীতিগুলো আইন প্রণয়নকালে রাষ্ট্র প্রয়োগ করবে তবে এই নীতিগুলো আদালতের মাধ্যমে বলবৎযোগ্য হবে না।</p>
                    </Clause>
                </div>
            </details>
            <details>
                <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ৯</summary>
                <div className="px-4 pb-4">
                    <p>জাতীয়তাবাদ: বাঙালি জাতির ঐক্য ও সংহতি হবে বাঙালি জাতীয়তাবাদের ভিত্তি।</p>
                </div>
            </details>
            <details>
                <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ১০</summary>
                <div className="px-4 pb-4">
                    <p>সমাজতন্ত্র ও শোষণমুক্তি</p>
                </div>
            </details>
            <details>
                <summary className="py-2 outline-none cursor-pointer">অনুচ্ছেদ ১১</summary>
                <div className="px-4 pb-4">
                    <p>গণতন্ত্র ও মানবাধিকার</p>
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
        </>
    );
};

export default Chapter2;