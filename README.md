## Breathing Techniques API

### **Project Overview**
Yoga and wellness has always been a passion of mine. I practice yoga and breathing techniques almost everyday and I wanted to build a project that merges my passion for technology with my passion for wellness.

**Problem Statement:** Balancing well-being with intensive learning can be challenging, often leading to burnout and reduced productivity.
**Solution:** A simple, all-in-one wellness app integrating breathing exercises, yoga, gratitude practices, and inspirational content to support mental well-being and focus.

Firstly, a Breathing Techniques API was created, it is a RESTful API designed to promote wellness and mindfulness by providing users with information about various breathing techniques. Each technique in the dataset includes its description, contraindications, ideal practice times, and recommended poses.

Then a dynamic frontend was created using React and Javascript.

The aim of this website is for:
- Managing stress and anxiety
- Supporting accessibility for diverse users
- Personalising breathing exercises based on individual needs or preferences

In the future, the API will integrate with the current frontend application, offering a more interactive and visual user experience.


---

### **Features**
- **Comprehensive Dataset**: Contains detailed information about various breathing techniques.
  - **Description**: Explains the technique in simple terms.
  - **Contraindications**: Lists scenarios or conditions where the technique may not be suitable.
  - **Ideal Practice Times**: Suggests when the technique is most effective (e.g., high stress, low energy).
  - **Recommended Poses**: Indicates the best pose to perform the technique (e.g., sitting, lying).

- **Filtering and Search Functionality**: 
  - Filter techniques based on pose suitability or ideal practice times.
  - Search for techniques to suit specific needs, such as reducing stress or increasing energy.

- **Random Technique Generator**: Allows users to discover a random breathing technique for immediate use.

---

### **Use Cases**
1. **For Individuals**:
   - Quickly find a breathing technique to combat stress or improve focus.
   - Tailor exercises based on physical limitations or preferences.

2. **For Wellness Apps**:
   - Integrate the API to provide users with breathing exercises suited to specific situations.
   - Build custom features, such as daily breathing reminders or guided exercises.

---

### **Endpoints**
| Method | Endpoint                 | Description                                              | Status Code |
|--------|--------------------------|----------------------------------------------------------|-------------|
| GET    | `/techniques`            | Retrieves a list of all breathing techniques.            | 200         |
| GET    | `/techniques/:id`        | Retrieves details of a specific technique by ID.         | 200         |
| POST   | `/techniques`            | Adds a new breathing technique to the dataset.           | 201         |
| PUT    | `/techniques/:id`        | Updates an existing technique by ID.                     | 200         |
| DELETE | `/techniques/:id`        | Deletes a specific technique by ID.                      | 200         |

---

### **Response Specification**
JSON responses from this API should adhere to the JSend specification as laid out in this documentation: https://github.com/omniti-labs/jsend

---

### **Future Goals**
1. **Frontend Integration**:
   - Integrate frontend and backend
   - Display visual guides for poses and techniques.
   - Integrate the backend API with a database

2. **Image Support**:
   - Include images for poses and techniques.

3. **Advanced Filtering**:
   - Add filters for specific use cases, like "best for study stress."

4. **Personalised Recommendations**:
   - Incorporate user preferences to suggest the best techniques dynamically.

---

### **Technologies Used**
- **Backend**: Node.js, Express.js, Javascript
- **Frontend**: React, Javascript
- **Version Control**: Git

---

### **Contact**
For questions, suggestions, or feedback, please contact graceoreilly111@gmail.com or open an issue in the repository.
