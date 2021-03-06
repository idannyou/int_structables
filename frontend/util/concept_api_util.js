
export const fetchConcepts = () => {
  return $.ajax({
    method: 'GET',
    url:'/api/concepts'
  });
};

export const fetchConcept = (id) => {
  return $.ajax({
    method: 'GET',
    url:`/api/concepts/${id}`
  });
};

export const createConcept = (concept) => {
  return $.ajax({
    method: 'POST',
    url: '/api/concepts',
    data: {concept}
  });
};

export const updateConcept = (concept) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/concepts/${concept.id}`,
    data: {concept}
  });
};

export const deleteConcept = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/concepts/${id}`
  });
};

export const fetchSpecificConcepts = (title) => {
  return $.ajax({
    method: 'GET',
    url: `api/concepts/`,
    data: { concept: { title } }
  });
};
