interface TYPE_DOMAIN {
  tokenId: number;
  name: string;
  owner: string;
  lastSalePrice?: number;
  currentBid?: number;
  price: number;
  collection: string;
  tags: string[];
  registedAt?: Date;
  expiresAt?: Date;
  auctionEndsAt?: Date;
  bookmarked: boolean;
}

interface TYPE_COLLECTION {
  slug: string;
  avatar: string;
  label: string;
  description: string;
  discordLink: string;
  numberOfItems: number;
  numberOfOwners: number;
  totalVolume: number;
  topSale: number;
  floorPrice: number;
  volumeDay: number;
  volumeChange: number;
  floorPriceChange: number;
}

type TYPE_VIEWMODE = "VM_LIST" | "VM_COMPACT" | "VM_MASS";
type TYPE_DOMAIN_CARD =
  | "DC_AUCTION"
  | "DC_CART"
  | "DC_PREMIUM"
  | "DC_SOLD"
  | "DC_PURCHASE"
  | "DC_LISTING"
  | "DC_OFFER"
  | undefined;

type TYPE_TX_STATUS = "TX_NONE" | "TX_SUBMIT" | "TX_FAILED" | "TX_SUCCESS";

export type {
  TYPE_COLLECTION,
  TYPE_DOMAIN,
  TYPE_VIEWMODE,
  TYPE_DOMAIN_CARD,
  TYPE_TX_STATUS,
};
