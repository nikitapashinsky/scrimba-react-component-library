import './banner.css';

export interface BannerProps {
  title: string;
  subtitle?: string;
}

export default function Banner({ title, subtitle }: BannerProps) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}
