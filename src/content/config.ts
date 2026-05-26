import { defineCollection, z } from 'astro:content';

const carreras = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcionCorta: z.string(),
    duracion: z.string().default('3 años'),
    modalidad: z.string().default('Semi-presencial'),
    nueva: z.boolean().default(false),
    destacada: z.boolean().default(false),
    icono: z.string(),
    orden: z.number(),
    planPdf: z.string().optional(),
    planMaterias: z.array(z.object({
      anio: z.number(),
      cuatrimestre1: z.array(z.string()).optional(),
      cuatrimestre2: z.array(z.string()).optional(),
      materias: z.array(z.string()).optional(),
    })).optional(),
  }),
});

const novedades = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    resumen: z.string(),
    imagen: z.string().optional(),
  }),
});

export const collections = { carreras, novedades };
