import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const ArtifactQuiz = () => {
    return (
        <div classNameName="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8  ">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-extrabold sm:text-3xl text-center mb-12 mt-24">Frequently Asked Questions</h2>
    <div className="space-y-4">
     
      <div className="bg-white shadow-md rounded-lg">
        <details className="group p-4">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-blue-600">
          What is the most ancient artifact in the collection?
            <span className="ml-2 text-blue-600 group-open:rotate-180 transform transition-transform duration-300"><HiOutlineChevronDoubleRight /></span>
          </summary>
          <p className="mt-2 text-gray-600">
          The most ancient artifacts in collections are often stone tools from early humans, dating back around 2.6 million years. Other notable items include cave paintings from 45,000 years ago, and artifacts from ancient civilizations like the Sumerians, Egyptians, and Indus Valley, dating back to 3000-3300 BCE.
          </p>
        </details>
      </div>

      
      <div className="bg-white shadow-md rounded-lg">
        <details className="group p-4">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-blue-600">
          How are artifacts authenticated before display?
            <span class="ml-2 text-blue-600 group-open:rotate-180 transform transition-transform duration-300"><HiOutlineChevronDoubleRight /></span>
          </summary>
          <p className="mt-2 text-gray-600">
          Artifacts are authenticated through a combination of scientific methods, including carbon dating, material analysis, and provenance research. Experts examine the object's age, origin, and historical context to verify its authenticity before display, ensuring it aligns with known historical records.
          </p>
        </details>
      </div>

     
      <div className="bg-white shadow-md rounded-lg">
        <details className="group p-4">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-blue-600">
          Are there any guided tours available?
            <span className="ml-2 text-blue-600 group-open:rotate-180 transform transition-transform duration-300"><HiOutlineChevronDoubleRight /></span>
          </summary>
          <p className="mt-2 text-gray-600">
          Yes, guided tours are available to enhance the visitor experience. These tours are led by knowledgeable guides who provide in-depth insights into the artifacts, their historical significance, and cultural context, offering an engaging and educational journey through history.
          </p>
        </details>
      </div>

      
      <div className="bg-white shadow-md rounded-lg">
        <details className="group p-4">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-blue-600">
          Are there any guided tours available?
            <span className="ml-2 text-blue-600 group-open:rotate-180 transform transition-transform duration-300"><HiOutlineChevronDoubleRight /></span>
          </summary>
          <p className="mt-2 text-gray-600">
          Yes, guided tours are offered, providing detailed insights into the artifacts and their historical context. Experienced guides lead visitors through the collection, ensuring an engaging and educational experience for history enthusiasts of all levels.
          </p>
        </details>
      </div>
      <div className="bg-white shadow-md rounded-lg">
        <details className="group p-4">
          <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-blue-600">
          How can I contribute an artifact to the collection?
            <span className="ml-2 text-blue-600 group-open:rotate-180 transform transition-transform duration-300"><HiOutlineChevronDoubleRight /></span>
          </summary>
          <p className="mt-2 text-gray-600">
          You can contribute an artifact by contacting the collection's administration team. Submit details like the artifact's history, origin, and condition, along with supporting documentation. Experts will evaluate its authenticity, relevance, and condition before accepting it into the collection.
          </p>
        </details>
      </div>
    </div>
  </div>
</div>
    );
};

export default ArtifactQuiz;
