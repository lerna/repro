import { faker } from "@faker-js/faker";

export function random_display_name() {
  return faker.internet.displayName();
}
