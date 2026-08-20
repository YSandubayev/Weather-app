type RefreshButtonProps = {
  onRefresh: () => void;
};

export default function RefreshButton({ onRefresh }: RefreshButtonProps) {
  return (
    <button className="refresh" onClick={onRefresh}>
      Refresh weather
    </button>
  );
}
