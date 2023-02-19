import clsx from 'clsx';

export default function Container({ className, ...props }) {
  return (
    <div className={clsx('mx-auto max-w-7xl px-8', className)} {...props} />
  );
}
