import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { usePrice, UsePriceProps } from '../usePrice';

const initialProps: UsePriceProps = {
  value: 123456.1234,
};

describe('#usePrice', () => {
  it('should return expected result when value changed', () => {
    const { result, rerender } = renderHook(usePrice, { initialProps });

    expect(result.current).toBe('₺ 123,456.12');

    rerender({ value: 456.34 });

    expect(result.current).toBe('₺ 456.34');
  });

  it('should return expected result when currency changed', () => {
    const { result, rerender } = renderHook(usePrice, { initialProps });

    expect(result.current).toBe('₺ 123,456.12');

    rerender({ ...initialProps, currency: '$' });

    expect(result.current).toBe('$ 123,456.12');
  });
});
