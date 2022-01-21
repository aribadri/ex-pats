// dto === data transfer object
module.exports = class UserDto {
  first_name;

  last_name;

  email;

  id;

  createdAt;

  rating;

  location_id;

  description;

  avatar_link;

  longitude;

  latitude;

  user_country;

  user_city;

  status_service;

  specialty;

  constructor(model) {
    this.first_name = model.first_name;
    this.last_name = model.last_name;
    this.email = model.email;
    this.id = model.id;
    this.createdAt = model.createdAt;
    this.rating = model.rating;
    this.location_id = model.location_id;
    this.description = model.description;
    this.avatar_link = model.avatar_link;
    this.longitude = model.longitude;
    this.latitude = model.latitude;
    this.user_country = model.user_country;
    this.user_city = model.user_city;
    this.status_service = model.status_service;
    this.specialty = model.specialty;
  }
};
