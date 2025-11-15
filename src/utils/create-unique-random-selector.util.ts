export const createUniqueRandomSelector = <T>(items: T[]): (() => T | undefined) => {
  let availableItems: T[] = [...items];
  let originalItems: T[] = [...items];
  let selectedCount: number = 0;

  return function selectUniqueItem(): T | undefined {
    if (selectedCount === originalItems.length) {
      // All items have been selected, reset for a new cycle
      availableItems = [...originalItems];
      selectedCount = 0;
    }

    if (availableItems.length === 0) {
      // If for some reason availableItems is empty after reset, or initially empty
      return undefined;
    }

    const randomIndex: number = Math.floor(
      Math.random() * availableItems.length
    );
    const selectedItem: T | undefined = availableItems[randomIndex];

    // Remove the selected item to ensure uniqueness in the current cycle
    availableItems.splice(randomIndex, 1);
    selectedCount++;

    return selectedItem;
  };
};
