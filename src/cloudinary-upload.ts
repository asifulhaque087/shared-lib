import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
  ConfigOptions,
} from 'cloudinary';

/**
 * Call this once in your service to configure Cloudinary using env vars or manual config.
 */
export function configureCloudinary(config: ConfigOptions): void {
  cloudinary.config(config);
}

/**
 * Upload any file (image, zip, etc.) to Cloudinary.
 */
export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) return resolve(error);
        resolve(result);
      }
    );
  });
}

/**
 * Upload a video file to Cloudinary.
 */
export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 50000,
        resource_type: 'video',
      },
      (error, result) => {
        if (error) return resolve(error);
        resolve(result);
      }
    );
  });
}
