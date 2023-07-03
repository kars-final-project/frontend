import StyledModalUpdateAdvertisement from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../input";
import { iUpdateAdvertisement, updateAdvertisementSchema } from "../../../schemas/ads.schema";
import { useContext } from "react";
import { AdsContext } from "../../../contexts/ads.context";

function UpdateAdvertisementModal({ advertisement }: any) {
  const { updateAd, setShowModalEditAd, deleteAd } = useContext(AdsContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateAdvertisement>({
    resolver: zodResolver(updateAdvertisementSchema),
  });

  const submit: SubmitHandler<iUpdateAdvertisement> = (data) => {
    updateAd(advertisement.id ,data)
  };

  return (
    <StyledModalUpdateAdvertisement>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h2>Editar anúncio</h2>
            <button onClick={() => setShowModalEditAd(false)} type="button">
              X
            </button>
          </div>
        </div>
        <h3>Informações do veiculo</h3>
        <form noValidate onSubmit={handleSubmit(submit)}>
          <Input
            id="marca"
            label="Marca"
            placeholder=""
            type="text"
            register={register("brand")}
            error={errors["brand"]?.message}
            disabled={false}
            defaultValue={advertisement.brand}
          />
          <Input
            id="modelo"
            label="Modelo"
            placeholder=""
            type="text"
            register={register("model")}
            error={errors["model"]?.message}
            disabled={false}
            defaultValue={advertisement.model}
          />
          <div className="div-input">
            <Input
              id="ano"
              label="Ano"
              placeholder=""
              type="number"
              register={register("year")}
              error={errors["year"]?.message}
              disabled={false}
              defaultValue={advertisement.year}
            />
            <Input
              id="combustivel"
              label="Combustível"
              placeholder=""
              type="text"
              register={register("fuel")}
              error={errors["fuel"]?.message}
              disabled={false}
              defaultValue={advertisement.fuel}
            />
          </div>
          <div className="div-input">
            <Input
              id="km"
              label="Quilometragem"
              placeholder=""
              type="number"
              register={register("mileage")}
              error={errors["mileage"]?.message}
              disabled={false}
              defaultValue={advertisement.mileage}
            />
            <Input
              id="cor"
              label="Cor"
              placeholder=""
              type="text"
              register={register("color")}
              error={errors["color"]?.message}
              disabled={false}
              defaultValue={advertisement.color}
            />
          </div>
          <div className="div-input">
            <Input
              id="tabela-fipe"
              label="Preço tabela FIPE"
              placeholder=""
              type="number"
              register={register("fipe_list_price")}
              error={errors["fipe_list_price"]?.message}
              disabled={false}
              defaultValue={advertisement.fipe_list_price}
            />
            <Input
              id="preço"
              label="Preço"
              placeholder=""
              type="number"
              register={register("price")}
              error={errors["price"]?.message}
              disabled={false}
              defaultValue={advertisement.price}
            />
          </div>
          <label>Descrição</label>
          <textarea
            {...register("description")}
            placeholder="Descrição"
            name="description"
            defaultValue={advertisement.description}
          />
          <label>Publicado</label>
          <div className="div-input">
            <button className="button-yes">Sim</button>
            <button className="button-no">Não</button>
          </div>
          <Input
            id="image1"
            label="Imagem da capa"
            placeholder=""
            type="text"
            register={register("cover_image")}
            error={errors["cover_image"]?.message}
            disabled={false}
            defaultValue={advertisement.cover_image}
          />
          <Input
            id="image2"
            label="1° Imagem da galeria"
            placeholder=""
            type="text"
            register={register("gallery_image_1")}
            error={errors["gallery_image_1"]?.message}
            disabled={false}
            defaultValue={advertisement.gallery_image_1}
          />
          <Input
            id="image3"
            label="2° Imagem da galeria"
            placeholder=""
            type="text"
            register={register("gallery_image_2")}
            error={errors["gallery_image_2"]?.message}
            disabled={false}
            defaultValue={advertisement.gallery_image_2}
          />
          <div className="modal-buttons">
            <button onClick={() => deleteAd(advertisement.id)} type="button" className="delete-button">
              Excluir anúncio
            </button>
            <button type="submit" className="save-button">
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </StyledModalUpdateAdvertisement>
  );
}

export default UpdateAdvertisementModal;
