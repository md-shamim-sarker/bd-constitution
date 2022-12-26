import React from 'react';
import Clause from '../components/Clause';

const Chapter1 = () => {
    return (
        <>
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
        </>
    );
};

export default Chapter1;