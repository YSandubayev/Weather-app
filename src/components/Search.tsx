type SearchProps = {
  input: string;
  setInput: (value: string) => void;
  onSearch: (city: string) => void; 
};

export default function Search({ input, setInput, onSearch }: SearchProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(input);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your city..."
      />
      <button type="submit">Search</button>
    </form>
  );
}



