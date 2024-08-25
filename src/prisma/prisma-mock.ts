import { mockDeep, DeepMockProxy } from "jest-mock-extended";
import { PrismaClient } from "@prisma/client";

type PrismaType = DeepMockProxy<PrismaClient >;

export const PrismaMock: PrismaType = mockDeep<PrismaClient>();