import React from 'react';
import "./search.css"

const skinDiseasesData = [
  {
    id: 1,
    name: 'Psoriasis',
    subtype: 'Plaque Psoriasis',
    symptoms: 'Red patches, silvery scales',
    detection: 'Physical examination, skin biopsy',
    precautions: 'Moisturize, avoid triggers',
    links: ['https://example.com/psoriasis'],
  },
  {
    id: 2,
    name: 'Eczema',
    subtype: 'Atopic Dermatitis',
    symptoms: 'Itchy, dry, inflamed skin',
    detection: 'Physical examination, skin patch testing',
    precautions: 'Keep skin moisturized, avoid triggers',
    links: ['https://example.com/eczema'],
  },
  // Add more diseases and their details as needed
];


const SkinDiseaseTable = ({ data }) => {
  return (
    <div className="skin-disease-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subtype</th>
            <th>Symptoms</th>
            <th>Detection</th>
            <th>Precautions</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {data.map((disease) => (
            <tr key={disease.id}>
              <td>{disease.name}</td>
              <td>{disease.subtype}</td>
              <td>{disease.symptoms}</td>
              <td>{disease.detection}</td>
              <td>{disease.precautions}</td>
              <td>
                {disease.links.map((link, index) => (
                  <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                    Link 
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SearchPage = () => {
  return (
    <div className="search-page">
      <h1>Skin Disease Information</h1>
      <SkinDiseaseTable data={skinDiseasesData} />
    </div>
  );
};

export default SearchPage;
