const families = [
  {
    candidate_ID: `100`,
    last_name: 'Rodriguez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'available',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `101`,
    last_name: 'Sanchez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'reserved',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `102`,
    last_name: 'Gomez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'scheduled',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `103`,
    last_name: 'Hernandez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'completed',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `104`,
    last_name: 'Garcia',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'available',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `105`,
    last_name: 'Perez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'reserved',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `106`,
    last_name: 'Martinez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'scheduled',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
  {
    candidate_ID: `107`,
    last_name: 'Jimenez',
    first_name: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius tempore quisquam voluptatum laudantium autem exercitationem, neque quasi minus eum! Laboriosam doloremque nihil dolore amet similique minus sint expedita blanditiis voluptas quasi quod possimus odit optio illum assumenda, a maiores et in, recusandae quis. Vitae nisi ipsam quaerat! Tempore autem distinctio in amet facere!`,
    current_living_conditions: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quam voluptate quaerat?`,
    married: true,
    parents: '',
    children: '',
    status: 'completed',
    date_found: '01/01/2001',
    number_children: 4,
    lcr: 7,
    family_photo:
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910530/spark-of-hope/family-photo_ntif7d.jpg',
    current_living_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-a_dpxnxk.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-b_tkwujo.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910529/spark-of-hope/image-c_tno56d.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697910528/spark-of-hope/image-d_ez0zss.jpg',
    ],
    completion_photos: [
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos1_lby7ok.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos2_hefec8.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911237/spark-of-hope/completion_photos3_amdphg.jpg',
      'https://res.cloudinary.com/dvfcvw2kk/image/upload/v1697911236/spark-of-hope/completion_photos4_kazcy9.jpg',
    ],
    completion_videos: 'https://www.youtube.com/watch?v=6C2y7ikPgXI',
  },
];

export function getFamilies() {
  return families;
}

export function getFamilyById(id) {
  const family = families.find((family) => family.candidate_ID == id);
  return structuredClone(family) || null;
}