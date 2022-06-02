interface List {
  displayName: string;
  id: string;
  isOwner: boolean;
  isShared: true;
  wellknownListName: string;
}

interface ListIndexResponse {
  value: List[];
}

export { List, ListIndexResponse };
