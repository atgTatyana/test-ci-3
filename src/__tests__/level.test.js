import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel with response.status = ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 12 });

  const result = getLevel(5);
  expect(result).toBe('Ваш текущий уровень: 12');
});

test('getLevel with response.status = error', () => {
  fetchData.mockReturnValue({ status: 'error', level: 12 });

  const result = getLevel(5);
  expect(result).toBe('Информация об уровне временно недоступна');
});

test('should call getLevel with userId', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 12 });

  getLevel(5);
  expect(fetchData).toBeCalledWith('https://server/user/5');
});
