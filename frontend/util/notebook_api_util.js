
export const fetchNotebooks = () => (
  $.ajax({
    method: "GET",
    url: "api/notebook"
  })
);

export const fetchNotebook = (id) => {
  return $.ajax({
    method:"GET",
    url: `api/notebooks/${id}`
  });
};

export const createNotebook = (notebook) => (
  $.ajax({
    method: "POST",
    url: `api/notebooks`,
    data: { notebook }
  })
);

export const updateNotebook = (notebok) => (
  $.ajax({
    method: "PATCH",
    url: `api/notebooks/${notebook.id}`,
    data: { notebook }
  })
);

export const deleteNotebook = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/notebooks/${id}`
  })
);
