import '@testing-library/jest-dom/extend-expect'
jest.mock('next/image', () => ({
    __esModule: true,
    default: () => {
      return 'Handcrafted Soft Tuna'; // whatever
    },
}));