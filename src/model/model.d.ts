/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.14.505 on 2019-06-22 13:49:48.

export interface Address {
    id: number;
    street: string;
    postalCode: string;
    country: string;
    city: string;
    state: string;
}

export interface MoneyBase {
    amount: number;
    currency: string;
}

export interface NumberRange {
    from: number;
    to: number;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    company: CustomerCompany;
    delivery: CustomerDelivery;
}

export interface CustomerCompany {
    id: number;
    customerId: number;
    name: string;
    organisationNumber: string;
    street: string;
    postalCode: string;
    state: string;
    city: string;
}

export interface CustomerDelivery {
    id: number;
    customerId: number;
    expectedDate: Date;
    invoiceComment: string;
    street: string;
    postalCode: string;
    state: string;
    city: string;
}

export interface CustomerQuery {
    id: number;
    name: string;
}

export interface EmailBody {
    from: string;
    to: string;
    subject: string;
    body: string;
}

export interface EmailQuery {
}

export interface ImageUpload {
    file: MultipartFile;
    folderName: string;
    type: ImageUploadType;
    imageUrlRemoval: string;
}

export interface ImageUploadQuery {
}

export interface Job {
}

export interface JobQuery {
}

export interface Meal {
    id: number;
    menuId: number;
    name: string;
    description: string;
    amount: number;
    amountCy: string;
    preferences: MealPreferenceEnum[];
    types: MealTypeEnum[];
    imageUrl: string;
    created: Date;
    createdBy: string;
    updated: Date;
    updatedBy: string;
    quantity: number;
}

export interface MealMetadata {
    types: string[];
    preferences: string[];
}

export interface MealPreference {
    id: number;
    mealId: number;
    preference: MealPreferenceEnum;
}

export interface MealQuery {
    id: number;
    menuId: number;
    mealTypeId: number;
    mealPreferenceId: number;
}

export interface MealType {
    id: number;
    mealId: number;
    type: MealTypeEnum;
}

export interface Menu {
    id: number;
    restaurantId: number;
    category: MenuCategory;
    meals: Meal[];
    created: Date;
    createdBy: string;
    updated: Date;
    updatedBy: string;
}

export interface MenuQuery {
    id: number;
    restaurantId: number;
}

export interface Order extends Event {
    id: number;
    customer: Customer;
    items: OrderItem[];
    totalAmount: number;
    totalAmountCy: string;
    deliveryAmount: number;
    deliveryAmountCy: string;
    created: Date;
    createdBy: string;
    updated: Date;
    updatedBy: string;
}

export interface OrderItem {
    id: number;
    orderId: number;
    quantity: number;
    name: string;
    amount: number;
    amountCy: string;
}

export interface OrderQuery {
    id: number;
    customerId: number;
}

export interface Restaurant {
    id: number;
    name: string;
    description: string;
    status: RestaurantStatus;
    recipientLimit: NumberRange;
    openingHours: OpeningHour[];
    minimumOrderAmount: MoneyBase;
    shipping: Shipping;
    address: Address;
    menus: Menu[];
    imageUrl: string;
    created: Date;
    createdBy: string;
    updated: Date;
    updatedBy: string;
    shortDescription: string;
}

export interface RestaurantBillingInfo {
    email: string;
    phone: string;
}

export interface RestaurantQuery {
    id: number;
}

export interface SearchQuery {
    query: string;
    countries: string[];
    categories: MenuCategory[];
    preferences: MealPreferenceEnum[];
    types: MealTypeEnum[];
}

export interface SearchResult {
    id: number;
    header: string;
    subHeader: string;
    imageUrl: string;
    description: string;
    city: string;
    amount: number;
    amountCy: string;
    type: SearchResultType;
    totalHits: number;
}

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: UserRole;
    type: UserType;
    created: Date;
    createdBy: string;
    updated: Date;
    updatedBy: string;
}

export interface UserQuery {
}

export interface MultipartFile extends InputStreamSource {
    name: string;
    empty: boolean;
    bytes: any;
    resource: Resource;
    size: number;
    contentType: string;
    originalFilename: string;
}

export interface Event {
}

export interface OpeningHour {
    dayFrom: DayOfWeek;
    dayTo: DayOfWeek;
    timeFrom: Date;
    timeTo: Date;
    status: OpeningHourStatus;
    openingHourFormat: string;
}

export interface Shipping {
    shippingAmount: MoneyBase;
    shippingFreeLimit: MoneyBase;
    shippingComment: string;
}

export interface Resource extends InputStreamSource {
    open: boolean;
    file: any;
    url: URL;
    readable: boolean;
    description: string;
    uri: URI;
    filename: string;
}

export interface InputStreamSource {
    inputStream: any;
}

export interface URL extends Serializable {
}

export interface URI extends Comparable<URI>, Serializable {
}

export interface Serializable {
}

export interface Comparable<T> {
}

export type ImageUploadType = "RESTAURANT" | "MEAL";

export type MealPreferenceEnum = "VEGETARIAN" | "VEGAN" | "GLUTEN_FREE";

export type MealTypeEnum = "CAKES" | "SMOOTHIES" | "SEMLA" | "SANDWICH" | "JUICE" | "MAIN" | "CHICKEN" | "LAMB" | "MINI_HAMBURGER" | "BUFFET" | "SALAD" | "SMALL" | "WRAPS";

export type MenuCategory = "BREAKFAST" | "LUNCH" | "DINNER" | "SNACKS" | "DRINKS" | "BAR" | "FOOD_TRUCK";

export type RestaurantStatus = "ACTIVE" | "INACTIVE";

export type SearchResultType = "RESTAURANT" | "MENU" | "MEAL";

export type UserRole = "ADMIN" | "DEFAULT";

export type UserType = "CATERING" | "CORPORATE" | "PRIVATE";

export type DayOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

export type OpeningHourStatus = "OPEN" | "CLOSED";
