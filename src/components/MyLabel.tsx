import "./MyLabel.css";

export interface Props {
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
  /**
   * The background color of the text
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
