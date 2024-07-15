import "./MyLabel.css";

interface Props {
  /**
   * The text to display
   */
  label: string;
  /**
   * The size of the text
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * The color of the text
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * The font color of the text
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
