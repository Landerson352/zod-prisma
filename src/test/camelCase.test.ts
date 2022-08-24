import { camelCase } from '../util';

describe('camelCase', () => {
	test('from pascal case', () => {
		expect(camelCase("EquipmentClassName")).toBe("equipmentClassName");
	});
	test('from kebab case', () => {
		expect(camelCase("equipment-class-name")).toBe("equipmentClassName");
	});
	test('from space case', () => {
		expect(camelCase("equipment class name")).toBe("equipmentClassName");
	});
	test('from snake case', () => {
		expect(camelCase("equipment_class_name")).toBe("equipmentClassName");
	});
	test('with numbers', () => {
		expect(camelCase("version 1.34.5b")).toBe("version_1_34_5b");
	});
	test('from mixed case', () => {
		expect(camelCase("The quick-Brown fox jumped_over-The lazy_dog")).toBe("theQuickBrownFoxJumpedOverTheLazyDog");
	});
});