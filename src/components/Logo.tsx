import Image from 'next/image';

export default function Logo({ size = 'default', white = false }: { size?: 'small' | 'default' | 'large'; white?: boolean }) {
  const sizes = {
    small: { width: 120, height: 40 },
    default: { width: 160, height: 53 },
    large: { width: 240, height: 80 },
  };
  const s = sizes[size];

  return (
    <Image
      src="/images/logo.png"
      alt="BPM Taxatie Utrecht - Logo"
      width={s.width}
      height={s.height}
      className={`object-contain w-auto h-auto ${white ? 'brightness-0 invert' : ''}`}
      priority
      style={{ maxWidth: s.width, maxHeight: s.height }}
    />
  );
}
