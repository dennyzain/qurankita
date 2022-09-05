export interface DataProps{
    name:string;
}

export interface ListDataSurahTypes{
    nomor: number,
    nama: string,
    nama_latin:string,
    jumlah_ayat: number,
    tempat_turun: string,
    arti: string,
    deskripsi:string,
    audio: string
}

export interface AyahSurahTypes{
    id: number,
    surah: number,
    nomor: number,
    ar: string,
    tr: string,
    idn: string
}
export interface DetailDataSurahTypes{
    status: boolean,
    nomor: number,
    nama: string,
    nama_latin: string,
    jumlah_ayat: number,
    tempat_turun: string,
    arti: string,
    deskripsi: string,
    audio: string,
    ayat: Array<AyahSurahTypes>,
    surat_selanjutnya:ListDataSurahTypes,
    surat_sebelumnya: ListDataSurahTypes

  }
