import React, {
  ElementType,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';

/**
 * ジェネリック型の Card コンポーネント。
 * `as` に渡した要素やコンポーネントの props を継承しつつ、共通のスタイルを適用します。
 *
 * @example
 * <Card as="a" href="/foo">Link Card</Card>
 * <Card as="article">Article Card</Card>
 */

export type CardProps<C extends ElementType = 'div'> = {
  /**
   * レンダリングする要素。デフォルトは `div`。
   */
  as?: C;
  /**
   * 任意の子要素。
   */
  children?: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'className' | 'children'>;

// ジェネリックを推論させるために関数をいったん宣言し、forwardRef に渡す
function CardInner<C extends ElementType = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: CardProps<C>, ref: React.Ref<HTMLElement>) {
  const Component = (as || 'div') as ElementType;
  return (
    <Component
      ref={ref as never}
      className={`bg-white rounded-xl border border-gray-200 shadow-card hover:shadow-card-hover transition-shadow ${className}`}
      {...(rest as object)}
    >
      {children}
    </Component>
  );
}

export const Card = forwardRef(CardInner) as unknown as {
  <C extends ElementType = 'div'>(
    props: CardProps<C> & { ref?: React.Ref<HTMLElement> }
  ): React.ReactElement | null;
  displayName?: string;
};

Card.displayName = 'Card';
